const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const http = require("http")
const app = express()

//API file to talk to mongoDB
//const api = require('./server/routes/api')

//Parsers 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Angular Dist Folder
app.use(express.static(path.join(__dirname + "/dist")))

//API location 
// app.use('/api', api)

//Send the rest of the requests throught the angular app 
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"))
})

app.listen(3000, (req,res) =>{
    console.log("Connected to port 3000")
})