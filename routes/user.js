const express=require('express');
const Router=express.Router();

Router.get('/api',(req,res)=>
{
    res.send("From api Route");
})
module.exports=Router;