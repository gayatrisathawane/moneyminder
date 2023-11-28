import {Schema,model } from 'mongoose'

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    passWord:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    address:{
        type:String,
    },
    mobileNo:{
        type:String,
        required:true
    },
    bankName:{
        type:String,
        enum:['bank of india','HDFC','axis bank','canera','urban','maharastra','SBI']
    }
},{timestamps:true})

const User = model('User',userSchema)
export default User