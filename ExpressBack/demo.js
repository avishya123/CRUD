const express=require('express');
const app=express();
const port=6000;
app.use(express.json())  //middlewear
app.get('/home',(req,res)=>{
    // res.send('HELLO');
const obj=[{id:'1',name:'avi'},{id:'2',name:'rev'}];
    res.json( obj);
})
app.listen(port,()=>{
    console.log("server is running");
})