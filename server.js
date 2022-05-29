require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
require('./db');

app.use("/", routes);

const PORT = process.env.PORT || 3000;      //if not specified port is 3000

app.listen(PORT,()=>{
    console.log(`Server Listning on Port ${PORT}`);
});