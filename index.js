const express = require("express");
const { join } = require("path");

const router = express.Router();

router.use("/resources", express.static(join(__dirname, "html")));
router.get("/resources", (req, res) => {
    res.sendFile(join(__dirname, "html/index.html"));
});

module.exports = app;