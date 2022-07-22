const express = require("express");
const router = express.Router();

const fileRouter = require("./fileRouter");

router.use("/", fileRouter);

module.exports = router;
