var express = require("express");
var coursesRouter = require('./routes/courses');
require("dotenv").config();
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');


app.use(bodyparser.json());

// middleware to register routers
app.use('/api/v1/courses/',coursesRouter);

app.get('/',(req,resp)=>{
    resp.send("Your url is working fine");
});

mongoose.connect(process.env.DB_CONNECTION_URL).then(()=>{
    console.log("Connected to Mongo DB: ");
});
app.listen(process.env.PORT,()=>{
    console.log("site is working");
});