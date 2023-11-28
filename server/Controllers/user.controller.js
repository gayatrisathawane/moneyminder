import User from './../models/User.model.js'

 const postapisignup = async(req,res)=>{


    const {userName,passWord,email,address,mobileNo,bankName}=req.body

    const newUser = new User({
        userName,passWord,email,address,mobileNo,bankName

    })

    try{
        const savedUser = await newUser.save()

        return res.status(201).json({
            success:true,
            data:savedUser,
            message:"user register successfully"

        })

    }catch(e){
        return res.json({
            success:true,
            message:(e.message)
        })
     }

      
}

const getapisignup =  async(req,res) => {

    const {_id}= req.params

    const  fetchUser = await User.findOne({_id:_id})
    
    res.status(200).json({
        success:true,
        data:fetchUser,
        message:"user fetch successfully"
    })
}

export {postapisignup,getapisignup}