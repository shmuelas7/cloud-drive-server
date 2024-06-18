const express = require("express");
const router = express.Router();

const userLogic = require("../BL/userLogic");
const { authJWT } = require("../middleware/auth");
router.post("/login", async (req, res) => {
    console.log("login")
    try {
        const token = await userLogic.login(req.body);
        res.send(token);
    } catch (err) {
        res.status(err.code).send(err.message);
    }
});

router.post("/register", async (req, res) => {
    console.log("register")
    try {
        const token = await userLogic.register(req.body);
        res.send(token);
    } catch (err) {
        res.status(err.code).send(err.message);
    }
});

router.get("/user", authJWT, async (req, res) => {
    try {
        const user = await userLogic.get(req._id);
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;