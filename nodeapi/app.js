const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')


const port = process.env.PORT || 3000
const morgan = require("morgan")
const postRoutes = require('./routes/post')  //export routes
app.use(morgan("dev"))  //middleware
app.use(bodyParser.json())
app.use(expressValidator())


dotenv.config()
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(()=>console.log('db connected'))
mongoose.connection.on('error', err => console.log(`db conn error : ${err}`))

 
//  //  //  //  //  //

app.use("/", postRoutes)


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})