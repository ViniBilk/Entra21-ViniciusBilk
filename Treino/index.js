require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./src/routes/authRoutes");
const usersRoutes = require("./src/routes/userRoutes");

const erroHandler = require("./src/middleware/erroHandler");

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

app.use(erroHandler);

app.listen(3000, () => {
    console.log("Servidor iniciou!");
});