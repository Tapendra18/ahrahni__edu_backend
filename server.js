const http = require("http");
const express = require("express");
const apps = require('./app');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors({credentials: true, origin: true}));
mongoose.set("strictQuery" , true);

const server = http.createServer(apps);

server.listen(port , ()=>{
    console.log(`server start at Port No :${port}`)
});