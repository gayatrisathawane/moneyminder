
import {Schema,model} from mongoose

const transactionSchema = new Schema({

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
        enum:["shopping","food","rent","entertainment","travel","other"]

    },
    description:{
        type:String,
        default:"other"
    }


},{timestamps:true})

const Transaction  = model('Transaction',transactionSchema)

export default Transaction;