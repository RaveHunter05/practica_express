const express= require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv/config');

//IMPORT ROUTES

const postRoute=require('./routes/posts');

app.use('/post', postRoute);

//ROUTES

app.get('/',(req,res)=>{
    res.send("ahora andas aqui prro xdxdd")
})


//Connect to db here
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=>console.log('connected to DB')
                );


//How we start listening to the server

app.listen(3000);