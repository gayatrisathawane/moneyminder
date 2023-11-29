import React, { useState } from 'react'
import  {useEffect} from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Transaction from './../../component/Transaction/Transaction.js'
import axios from "axios"

const Mytransaction = () => {

  const [transaction ,setTransacation]=useState([])

  const user = JSON.parse(localStorage.getItem('userMoneyMinder'))


  const loadUserTransaction = async()=>{
    const response = await axios.get(`/api/v1/transactions/${user._id}`)
    setTransacation(response?.data?.data)


  }

  useEffect(()=>{
    loadUserTransaction()

  },[user._id])

 
  return (
    <div>
        <Navbar/>
        <h1>my transacation</h1>

        {
          transaction.map((transaction,index)=>{
            const{ _id ,amount, type, category, description}=transaction
            return(
       
              <div>
             
             <Transaction key={_id} amount={amount} type={type} category={category} description={description}/>
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
