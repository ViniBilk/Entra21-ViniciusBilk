require("dotenv").config;
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("854714059959-12tp2be184e4sfp3de40p28p9hndubm5.apps.googleusercontent.com");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { User, RefreshToken } = require("./src/models");
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

function authMiddleware(req, res, next) {
    const authToken = req.headers.authorization?.replace("Bearer ", "");

    if (!authToken) {
        res.status(401).json({ message: "Token is missing" });
    }

    try {
        const payload = jwt.verify(authToken, process.env.TOKEN_SECRET);

        res.locals.userId = payload.sub;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid Token!" });
    }
};

app.post("/", async (req, res) => {
    try {

        const { token } = req.body;

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "854714059959-12tp2be184e4sfp3de40p28p9hndubm5.apps.googleusercontent.com"
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];

    } catch (error) {
        console.log(error)
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            res.status(400).json({ message: "E-mail or Password Incorrect! " });
        }

        if (!user.verifyPassword(password)) {
            res.status(400).json({ message: "E-mail or Password Incorrect! " });
        }

        // Emitindo o access-token
        const token = jwt.sign({ sub: user.id }, process.env.TOKEN_SECRET, {
            expiresIn: "20s"
        });

        const expiresIn = Date.now() + 1000 * 60;

        // Emitindo o refresh-token
        const refreshToken = jwt.sign({ sub: user.id }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn
        });

        const [dbRefreshToken, created] = await RefreshToken.findOrCreate({
            where: {
                user_id: user.id
            },
            defaults: {
                token: refreshToken,
                expiresIn
            }
        });

        if (!created) {
            dbRefreshToken.token = refreshToken;
            dbRefreshToken.expiresIn = expiresIn;

            await dbRefreshToken.save();
        }

        res.json({ token, refreshToken });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Oops! Something bag happened!" });
    }
});

app.post("/refresh", async (req, res) => {
    try {
        const token = req.body.refreshToken || "";
        const refreshToken = await RefreshToken.findOne({
            where: {
                token
            },
            include: "user"
        });
        // Validar o refreshToken
        if (!refreshToken) {
            res.status(401).json({ message: "Refresh Token invalid!" });
        }

        // Emitir um novo access-token
        const accessToken = jwt.sign({ sub: refreshToken.user.id }, process.env.TOKEN_SECRET, {
            expiresIn: "20s"
        });
        const expiresIn = Date.now() + 1000 * 60;
        // Emitir um novo refresh-token
        const newRefreshToken = jwt.sign({ sub: refreshToken.user.id }, process.env.TOKEN_SECRET, {
            expiresIn
        });
        refreshToken.token = newRefreshToken;
        refreshToken.expiresIn = expiresIn;
        refreshToken.save();
        res.send({ accessToken, newRefreshToken });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Oops! Something bag happened!" });
    }
});

app.post("/singup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const [user, created] = await User.findOrCreate({
            where: {
                email
            },
            defaults: {
                name,
                password,
                role: "user"
            }
        })

        if (!created) {
            res.status(409).json({ message: "E-mail already exists! " });
        }

        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Failed!" });
    }
});

app.listen(PORT, () => console.log("Servidor rodando na porta: " + PORT));



