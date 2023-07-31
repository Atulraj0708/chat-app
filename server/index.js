const express=require('express')
const app=express();
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const {UserModel}=require('./models/User')

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

app.get('/test',(req,res)=>{
    res.json('test ok');
})

app.post('/register',(req,res)=>{
    const {username,password}=req.body();
    UserModel.create({username,password})
     
})

app.listen(4000);