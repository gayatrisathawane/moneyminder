import Transaction from "./../models/Transacation.model.js";
import { responder } from "./../utities.js";

const getapihealth = async (req, res) => {

    responder({
        res,
        success: true,
        message: "server is live"
    })

}

// const postapitransaction = async (req, res) => {

//     const { amount, type, category, description } = req.body

//     const newTransacation = new Transaction({

//         amount, type, category, description


//     })


//     try {
//         const savedTransacation = await newTransacation.save()

//         return responder({
//             res,
//             success: true,
//             data: savedTransacation,
//             message: "transaction is added"
//         })

//     }
//     catch (err) {

//         return responder({
//             res,
//             success: false,
//             message: (err.message)
//         })



//     }

// }

const postapitransactionv2 = async (req, res) => {

    const { AcoountHoldelder, amount, type, category, description } = req.body

    const newTransacation = new Transaction({

        AcoountHoldelder, amount, type, category, description


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


const getapitransacation = async (req, res) => {

    const allTransaction = await Transaction.find()

    responder({
        res,
        success: true,
        data: allTransaction,
        message: "successfully get all transaction "
    })
}

const getapitransacationUser = async (req, res) => {

    const { _id } = req.params

    const userTransacation = await Transaction.find({ AcoountHoldelder: _id }).populate('AcoountHoldelder')

    userTransacation.forEach((transacation) => {
        transacation.AcoountHoldelder.passWord = undefined
    })

    res.json({

        success: true,
        data: userTransacation,
        message: "successfully get all transaction "

    })
}


const deleteapitransacation = async (req, res) => {

    const { _id } = req.params

    await Transaction.deleteOne({ _id: _id })

    res.json({
        success: true,
        message: "delete transaction successfully "
    })
}

const putapitransacation = async (req, res) => {

    const { _id } = req.params;

    const { AcoountHoldelder, amount, type, category, description } = req.body;

    await Transaction.updateOne({ _id: _id }, {
        $set: {AcoountHoldelder, amount, type, category, description }
    })

    const updateTransaction = await Transaction.findOne({ _id: _id })

    return res.json({
        success: true,
        data: updateTransaction,
        message: "update transacation"

    })

}

export { getapitransacation, getapihealth, postapitransactionv2, getapitransacationUser, deleteapitransacation, putapitransacation }