const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Now you're on post")
});

router.get('/post',(req,res)=>{
    res.send("now you're in a post of a post")
})

module.exports =router;