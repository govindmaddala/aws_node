require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var morgan = require('morgan');

app.use(morgan('dev'))

let port = 5000

app.get("/home", (req,res)=>{
    res.send({message: "Message from backend"})
})
app.listen(port, async () => {
    await dbConnect()
    console.log(`App is running on ${port}`)
})