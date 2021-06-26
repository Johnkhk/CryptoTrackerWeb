// const { response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dontenv = require('dotenv')
const axios = require('axios')

const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const session = require("express-session")




dontenv.config()
// console.log(process.env.JWT_SECRET)

//TO IMPLEMENT
// router.post('/AddCryptos', async (request, response) =>{})
router.get("/coins", async(req, res, next)=>{
    console.log("cryptooooooooooooooooooooooooooooooooooooooooooooooo")
    let qs = `?start=1&limit=5000&convert=USD`
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' + qs
    let query = {
        headers: { 'X-CMC_PRO_API_KEY': '4f4782f4-4fb7-4881-b1a5-e11c6ffce450' }
    }
    //4f4782f4-4fb7-4881-b1a5-e11c6ffce450
    try {
        axios.get(url, query).then(response=>res.json(response.data))
        .catch(err => res.send(err));
        // console.log(res)
        console.log(res)
    }catch(error){
        console.log(error)
    }
})

router.post('/login', async (request, response) =>{
    const { username, password} = request.body
    const user = await signUpTemplateCopy.findOne({username}).lean()
    if(!user) {
        return response.json({status:'error', error:'Invalid Username/Password'})
    }

    if(await bcrypt.compare(password, user.password)) {
        // username, pw combo successful

        const token = jwt.sign({id: user._id, username:user.username
        }, process.env.JWT_SECRET)
        // console.log(typeof(response))
        // console.log(response.keys())
        // Object.keys(response).forEach((prop)=> console.log(prop));
        return response.json({status:'ok', data:token})
    }


    response.json({status:'ok', data:"Invalid Username/Password"})
})

router.post('/signup', async (request, response) =>{

    const { username, email, password: plainTextPassword } = request.body

    if(!username || typeof username !== 'string') {
        return response.json({status:'error', error:'Invalid Username'})
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return response.json({status:'error', error:'Invalid Password'})
    }
    // if(plainTextPassword.length<5) {
    //     return response.json({status:'error', error:'Password too short'})
    // }

    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    const password = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await signUpTemplateCopy.create({
            username, email, password
        })
        console.log('User created successfully: ', response)
    } catch(error) {
        console.log(error)
        if(error.code === 11000){
            //duplicate key
            return response.json({status:'error', error: 'Username already in use'})
        }
        throw error
    }
    response.json({ status: 'ok' })

    // const signedUpUser = new signUpTemplateCopy({
    //     username:request.body.username,
    //     email:request.body.email,
    //     password:securePassword
    // })
    // signedUpUser.save()
    // .then(data=>{
    //     console.log(data)
    //     response.json(data)
    // })
    // .catch(error =>{
    //     console.log(error)
    //     response.json(error)
    // })
    
    // response.send('send')
})

module.exports = router