const express=require('express')
const bodyParser=require("body-parser")
const Producer=require("./producer")
const app=express()
const producer=new Producer();
app.use(bodyParser.json("application/json"))

app.post("/sendlog",async(req,res,next)=>{
await producer.publishMessage(req.body.logType,req.body.message);
res.send("published")
})

app.listen(3000,()=>{
    console.log("server connected")
})