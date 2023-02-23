const http = require("http");
const express = require("express");
const apps = require('./app');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// const port = '192.168.1.57' || 5000;

app.use(cors({credentials: true, origin: true}));
mongoose.set("strictQuery" , true);

const server = http.createServer(apps);

server.listen(5000, '192.168.1.57' , ()=>{
    console.log(`server start at Port No `)
});