const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("<h1>hello world yay its working</h1>")
})
app.listen(8080,()=>{
    console.log("listening to port 8080")
})