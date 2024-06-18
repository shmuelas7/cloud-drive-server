const jwt = require("jsonwebtoken");
const { validateToken } = require("./jwt");
const SECRET_JWT = process.env.SECRET_JWT;

const authJWT = (req, res, next) => {
    console.log("authJWT")
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const res = jwt.verify(token, SECRET_JWT)
        if (!res) {
            return res.sendStatus(403);
        }
        req._id = res._id;
        next();

    } else {
        res.sendStatus(401);
    }
};
module.exports = { authJWT };