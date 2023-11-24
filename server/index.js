import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app =express();

app.use(express.json())

//mongoDb connection




const PORT= process.env.PORT || 5000

app.listen(PORT ,()=>{
    console.log(`port running on ${PORT}`)
})