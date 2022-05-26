require('dotenv').config();
const express = require('express');
const app = express();
const mongoose =  require('mongoose');
mongoose.connect("mongodb://localhost/Community-Project");
const User = require('./db')

app.get('/',(req,res)=>{
    res.send('Hi');
})

const PORT = process.env.PORT || 3000;      //if not specified port is 3000

app.listen(PORT,()=>{
    console.log(`Server Listning on Port ${PORT}`);
});