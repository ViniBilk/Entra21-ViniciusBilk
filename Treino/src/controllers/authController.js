const authServices = require("../services/authServices");

async function login(req, res, next) {
    try {
        const tokens = await authServices.createTokens(req.body);

        return res.json(tokens);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function refresh(req, res, next) {
    try {
        const tokens = await authServices.refreshToken(req.body);

        return res.json(tokens);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function goog(req,res,next){
    try {

        const userPayload = usersServices.verifyToken(req.body)

        res.status(201).json(userPayload)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    login,
    refresh,
    goog
};