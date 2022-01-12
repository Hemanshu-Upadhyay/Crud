const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
const User = require('./model/UserModel');
const Url = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());


app.get('/Health',(req,res)=>{
    res.send('Health Check');
})

app.use('/User', require('./Routes/Crud'));

mongoose.connect(Url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(port,()=>{
        console.log(`server started on port ${port}`);})
    console.log('Connected to MongoDB');
}).catch(err=>{
    console.log('Error in connecting to MongoDB');
})