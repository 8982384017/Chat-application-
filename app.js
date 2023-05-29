require('dotenv').config();
const mongoose = require('mongoose');
const app = require("express")();
const http = require("http").Server(app);

mongoose.connect('mongodb://127.0.0.1:27017/dynamic-chat-app');
http.listen(5000, (err) => {
    if(err) console.log(err);
    else console.log("Connection Successfull");
})