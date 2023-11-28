import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
import {postapitransaction,getapitransacation,getapihealth} from './Controllers/transacation.js';
import {postapisignup,getapisignup} from './Controllers/user.controller.js'



app.use(express.json())

//mongoDb connection

const mongoDB = async () => {

    const connect = await mongoose.connect(process.env.MONGO_URL)
    if (connect) {
        console.log(" mongodb connected")
    }

}
mongoDB()

// health api 

app.get('/api/health',getapihealth )

//post api 

app.post('/api/transaction', postapitransaction)

//GET api 

app.get('/api/transactions',getapitransacation)


// user api 


app.post('/api/v1/signups',postapisignup)
app.get('/api/v1/signups/:_id',getapisignup)





const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
   
})