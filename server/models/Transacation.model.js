
import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({

    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:["credit","debit"],
        required:true

    },
    category:{
        type:String,
        enum:["shopping","food","rent","entertainment","travel","other"],
        default:"other"

    },
    description:{
        type:String,
       
    }


},{timestamps:true})

const Transaction  = mongoose.model('Transaction',transactionSchema)

export default Transaction;