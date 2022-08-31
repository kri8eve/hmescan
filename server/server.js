const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const port = process.env.PORT || 9494
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
return res.send({
    status:true,
    message:'HME Server'
})
})
app.post('/hme',(req,res)=>{
    try {
        const {timestamp,userId,chargerId} = req.body
    console.log({
        timestamp,userId,chargerId
    })
    return res.send({
        status:true,
        message:'Received Successfully'
    })
    } catch (error) {
        return res.send({
            status:false,
            error:error.message
        })
    }
    
})

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})