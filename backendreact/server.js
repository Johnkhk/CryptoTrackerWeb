const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dontenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dontenv.config()

// console.log(process.env.DATABASE_ACCESS)

const options = {
    dropDups: true,
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}

mongoose.connect(process.env.DATABASE_ACCESS, options, () => console.log("Database connected"))


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server up and runnin"))

// POSTMAN