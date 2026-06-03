const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
    res.json({
        message: "Olá do Kubernetes!"
    });
});

app.listen(3000, () => {
    console.log("API rodando em: http://localhost:3000");
});
