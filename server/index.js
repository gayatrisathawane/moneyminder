import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
import {getapitransacation,getapihealth,postapitransactionv2,getapitransacationUser,deleteapitransacation,putapitransacation} from './Controllers/transacation.js';
import {postapisignup,getapisignup,postapilogin,postapisignupv2} from './Controllers/user.controller.js'
import Transaction from './models/Transacation.model.js';

import path from 'path';



app.use(express.json())

const __dirname = path.resolve();

//mongoDb connection

const PORT = process.env.PORT || 5000

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

// app.post('/api/transaction', postapitransaction)
app.post('/api/v2/transaction', postapitransactionv2) //user add 
app.get('/api/v1/transactions/:_id',getapitransacationUser)


//GET api 

app.get('/api/transactions',getapitransacation)


// user api 


app.post('/api/v1/signups',postapisignup)
app.post('/api/v2/signups',postapisignupv2)
app.get('/api/v1/signups/:_id',getapisignup)
app.post('/api/v1/logins',postapilogin)



app.delete('/api/transactions/:_id', deleteapitransacation)
app.put('/api/transactions/:_id',putapitransacation)



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }




app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
   
})