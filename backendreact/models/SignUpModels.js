const mongoose = require('mongoose')
const signUpTemplate = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        unique: true,
        dropDups: true
    },
    email: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    date: {
        type:Date,
        default:Date.now
    },
    coins_info: [{
        coin_name: String,
        coin_price: String
    }]
    
})

const model = mongoose.model('mybaby', signUpTemplate)
module.exports = model