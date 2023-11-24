import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

import Transaction from './models/Transacation.model.js'

app.use(express.json())

//mongoDb connection

const mongoDB = async () => {

    const connect = await mongoose.connect(process.env.MONGO_URL)
    if (connect) {
        console.log(" mongodb connected")
    }

}

// health api 

app.get('/api/health', async (req, res) => {

    res.json({
        success: true,
        message: "server is live"

    })

})

//post api 

app.post('/api/transaction', async (req, res) => {

    const { amount, type, category, description } = req.body

    const newTransacation = new Transaction({

        amount, type, category, description


    })


    try {
        const savedTransacation = await newTransacation.save()

        return res.json({
            success: true,
            data: savedTransacation,
            message: "transaction is added"
        })

    }
    catch(err) {

        return res.json({
            success:false,
            message: (err.message)
    })



    }

})





const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
    mongoDB()
})