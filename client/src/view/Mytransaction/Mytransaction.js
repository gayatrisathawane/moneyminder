import React, { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Transaction from './../../component/Transaction/Transaction.js'
import axios from "axios"
import './Mytransaction.css'

const Mytransaction = () => {

  const [creditSum, setCresditSum] = useState(0)
  const [debitSum, setDebitSum] = useState(0)
  const [user, setUser] = useState({})

  const [transaction, setTransacation] = useState([])

  const EMOJI_BADGED_MAP = {
    "food": "🍟",
    "shopping": "👜",
    "rent": "🏠",
    "entertainment": "🎦",
    "travel": "🚌",
    "salary": "💰",
    "other": "💁‍♀️"
  }


  const loadUserTransaction = async () => {

    const userStore = JSON.parse(localStorage.getItem('userMoneyMinder'))

    const userId = userStore._id

    const response = await axios.get(`/api/v1/transactions/${userId}`)

    const transacationData = response?.data?.data;

    let totalCredit = 0;
    let totalDebit = 0;

    transacationData.forEach((transacation, index) => {
      if (transacation.type === "credit") {
        totalCredit = +transacation.amount;
      }
      else {
        totalDebit += transacation.amount
      }
    })

    setCresditSum(totalCredit)
    setDebitSum(totalDebit)
    setTransacation(response?.data?.data)
  }

  useEffect(() => {
    loadUserTransaction()
  }, [user])



  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('userMoneyMinder' || '{}'))

    if (storeUser?.email) {

      setUser(storeUser)

    } else {

      alert('you are not logged in !...')
      window.location.href = '/login'

    }
  }, [])


  const deleteTransaction = async (id) => {

    const response = await axios.delete(`/api/transactions/${id}`)

    if (response?.data?.success) {
      loadUserTransaction()

    }


  }



  


  return (
    <div>
      <Navbar />
      <p className='text-center fs-1 mt-3 '> MY TRANSACTION </p>


      <div className='sum-container'>
        <h3 className='sum'>CrediredSum:-{creditSum}</h3>
        <h3 className='sum'>DebitedSum:{debitSum}</h3>

      </div>

      {
        transaction?.map((transaction, index) => {

          const { _id, amount, type, category, description, createdAt } = transaction;

          const date = new Date(createdAt).toLocaleDateString()
          const time = new Date(createdAt).toLocaleTimeString()
          return (

            <div key={index} className='my-transaction-container' >
              <span className={`fs-4 fw-bold ${type === 'credit' ? "credit-amount" : 'debit-amount'}`}>{type === "debit" ? "-" : "+"}{""}
                {amount}</span>
              <span className='fs-5'> {type === "credit" ? "(Credited)" : "(Debited)"}</span>
              <h5 className='category'>{`${EMOJI_BADGED_MAP[category]}`}{category}

              </h5>
              <div className='time-date '>
                <span>{date}</span>
                <span className='ms-2'>{time}</span>
              </div>

              <hr />
              <p>{description}</p>

              <span onClick={() => {
                deleteTransaction(_id)

              }} className='delete-icon'>Delete</span>

              <span className='ms-5 edit-icon' onClick={() => {
                                    window.open(`/updatetransaction/${_id}`)
                                }}

              >Edit</span>



            </div>
          )
        })

      }
      <div>

      </div>


    </div>
  )
}

export default Mytransaction
