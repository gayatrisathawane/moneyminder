
import {Schema,model} from 'mongoose'

const transactionSchema = new Schema({

    AcoountHoldelder:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },

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
        enum:["shopping","food","rent","entertainment","travel","salary","other"],
        default:"other"

    },
    description:{
        type:String,
       
    }


},{timestamps:true})

const Transaction  =model('Transaction',transactionSchema)

export default Transaction;