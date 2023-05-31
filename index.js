const express=require('express');
const cors=require('cors');
const app=express();
const port=process.env.PORT||5000;

// middleware
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Chocolate -management-server is running')
})

app.listen(port,()=>{
    console.log(`chocolate server port is:${port}`)
})