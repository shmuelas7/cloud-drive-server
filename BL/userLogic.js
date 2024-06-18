const userController = require("../DL/controllers/user.controller");
const jwtFn = require("../middleware/jwt");
const fileLogic = require("./fileLogic");
async function login(loginData) {
    const password = loginData.password;
    const email = loginData.email;
    console.log(password + " " + email);
    const user = await userController.readOne({ email: email }, "+password");
    console.log("🚀 ~ file: userLogic.js ~ line 8 ~ login ~ user", user);
    if (!user) throw { code: 404, message: "User does not exist" };
    console.log(user.password + " " + password);
    if (user.password !== password)
        throw { code: 401, message: " Username or password incorrect" };
    const token = jwtFn.createToken(user._id);

    return token;
}

async function register(data) {
    const { email, password, fullName } = data;
    if (!email || !password || !fullName)
        throw { code: 400, message: "missing data" };
    const existUser = await userController.readOne({ email });
    console.log(existUser);
    if (existUser) throw { code: 409, message: "User already exist" };
    const user = await userController.create(data);
    const token = jwtFn.createToken(user._id);
    fileLogic.createFolder(user._id, "root")
    return token;
}
async function get(id) {
    if (id) {
        const result = await userController.readOne({ _id: id });
        return result;
    }
    if (!result) throw { code: 404, message: "not found" };
    return result;
}

async function update(id, newData) {
    const updatedUser = await userController.update({ _id: id }, newData);
    return updatedUser;
}

async function del(id) {
    const deletedUser = await userController.del({ _id: id });
    return deletedUser;
}
module.exports = { register, get, update, del, login };