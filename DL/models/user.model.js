const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel