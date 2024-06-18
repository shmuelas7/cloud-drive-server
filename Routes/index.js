const express = require("express");
const router = express.Router();

const fileRouter = require("./fileRouter");
const userRouter = require("./userRouter");
const { authJWT } = require("../middleware/auth");


router.use("/user", userRouter);
router.use("/", authJWT, fileRouter);

module.exports = router;
