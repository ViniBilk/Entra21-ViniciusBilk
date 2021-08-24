const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("854714059959-12tp2be184e4sfp3de40p28p9hndubm5.apps.googleusercontent.com");
const express = require("express");
const cors = require("cors");
const app = express();

const porta = 3000;

app.use(express.json());
app.use(cors());

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

app.listen(porta, () => {
    console.log(`Servidor está rodando em http://localhost:${porta}`);
});
