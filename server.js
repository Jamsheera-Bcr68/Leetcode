const express=require('express')
const app=express()

app.post('/admin/login',(req,res)=>{
    return res.status(200).json({success:true,message:'Login success'})
})
app.listen(3000,()=>{
    console.log('running');
    
})