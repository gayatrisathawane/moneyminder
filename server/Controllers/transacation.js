import Transaction from "./../models/Transacation.model.js";
import { responder } from "./../utities.js";

const getapihealth =async (req, res) => {

    responder({
        res,
        success: true,
        message: "server is live"
    })

}

const postapitransaction = async (req, res) => {

    const { amount, type, category, description } = req.body

    const newTransacation = new Transaction({

        amount, type, category, description


    })


    try {
        const savedTransacation = await newTransacation.save()

        return responder({
            res,
            success: true,
            data: savedTransacation,
            message: "transaction is added"
        })

    }
    catch (err) {

        return responder({
            res,
            success: false,
            message: (err.message)
        })



    }

}


const getapitransacation = async(req,res)=>{

    const allTransaction = await Transaction.find()

    responder({
        res,
        success:true,
        data:allTransaction,
        message:"successfully get all transaction "
    })
}

export { postapitransaction,getapitransacation,getapihealth }