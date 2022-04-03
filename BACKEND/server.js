const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const dotenv = require("dotenv");
const app = express ();

const PORT = process.env.PORT || 8090;

app.use (cors());
app.use(bodyParser.json());

const URL = process.env.MONODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

const connection = mongoose.Connection;
connection.once("open",()=>{
    
})
