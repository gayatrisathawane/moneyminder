import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Transaction from './../../component/Transaction/Transaction.js'
import axios from "axios"
import './Mytransaction.css'

const Mytransaction = () => {

  const [creditSum, setCresditSum] = useState(0)
  const [debitSum, setDebitSum] = useState(0)
  const [user,setUser]=useState({})

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

  const userget = JSON.parse(localStorage.getItem('userMoneyMinder'))

  const loadUserTransaction = async () => {
    const response = await axios.get(`/api/v1/transactions/${userget._id}`)

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
  }, [userget._id])


  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('userMoneyMinder' || '{}'))

    if (!storeUser) {
      alert('you are not logged in !...')
      window.location.href = '/login'


    } 
  }, [])


  return (
    <div>
      <Navbar />
      <p className='text-center fs-2 mt-3'> MY TRANSACTION </p>

          <h3>Creditum:-{creditSum}</h3>  
          <h3>Debitsum:{debitSum}</h3>
    



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
