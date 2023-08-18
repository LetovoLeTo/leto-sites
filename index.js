const express = require("express");
const { join } = require("path");

const app = express();

app.use("/map", express.static(join(__dirname, "html")));
app.get("/map", (req, res) => {
    res.sendFile(join(__dirname, "html/index.html"));
});

module.exports = app;