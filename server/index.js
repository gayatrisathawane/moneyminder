import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
import {postapitransaction,getapitransacation,getapihealth} from './Controllers/transacation.js';


app.use(express.json())

//mongoDb connection

const mongoDB = async () => {

    const connect = await mongoose.connect(process.env.MONGO_URL)
    if (connect) {
        console.log(" mongodb connected")
    }

}

// health api 

app.get('/api/health',getapihealth )

//post api 

app.post('/api/transaction', postapitransaction)

//GET api 

app.get('/api/transactions',getapitransacation)





const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
    mongoDB()
})