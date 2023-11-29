import React from 'react'
import './Transaction.css'

const Transaction = ({ _id ,amount, type, category, description}) => {

  return (
    <div className='my-transaction-container'>
        <h3>{amount}</h3>
       <p>{type}</p>
        <p>{description}</p>
        <p>{category}</p>

      
    </div>
  )
}

export default Transaction
