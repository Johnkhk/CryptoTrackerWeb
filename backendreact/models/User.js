const mongoose = require('mongoose')
const schema = mongoose.schema
const userChema = new Schema ({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
}, {timestamps:true})

const User = mongoose.model('User', userSchema)
modeule.expoerts = User