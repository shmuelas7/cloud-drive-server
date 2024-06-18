const userModel = require('../models/user.model')

// CRUD
async function create(data) {
    return await userModel.create(data)
}
async function read(filter, proj) {
    return await userModel.find({ ...filter, isActive: true }, proj)
}
async function readOne(filter, proj) {

    let data = await userModel.findOne(filter, proj)

    return data
}
async function update(id, data) {
    return await userModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}
async function save(user) {
    return await user.save()
}
module.exports = { create, read, readOne, update, del, save, }