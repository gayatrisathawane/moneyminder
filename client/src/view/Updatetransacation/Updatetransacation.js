import React from 'react'
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios'
import showToast from 'crunchy-toast';
import './Updatetransacation.css'
import Navbar from '../../component/Navbar/Navbar';
import { response } from 'express';

const Updatetransacation = () => {
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
  
 

      const { _id } = useParams();
  
      const setfield = async () => {

          const response = await axios.get(`/api/transactions/${_id}`)
          const { amount, type, category, description } = response.data.data

          setAmount(amount)
          setType(type)
          setCategory(category)
          setDescription(description)
        
  
      }
  
      useEffect (()=>{
          setfield()
  
      }, [] )
  
        const updateTransaction = async()=>{
  
          const updateObj = {amount, type, category, description}
  
          await axios.put(`/api/transactions/${ _id}` ,updateObj)
  
         
  
         showToast("update successfully........!")
  
        setAmount('')
        setType('')
        setCategory('')
        setDescription('')


        if(response.data.data){
          window.location.href='/mytransacation'
        }
  
        }


  
  
  return (
    <div>
         <div>
            <Navbar/>

            <div  className='add-transaction-container'>
              {/* <h1 className='text-center mt-3 p-3'> MoneyMinder </h1> */}
              
            
        <form>
    
          <div className='transacation-form-container'>
          <h3 className='text-center'>UPDATE TRANSACATION</h3>
            <div className="mb-3">
             <label className='fs-5 fw-bold'> Amount</label>
              <input type="Number" className="form-control mt-1"
                placeholder="Enter Amount here .... "
                value={amount}
                onChange={(e) => { setAmount(e.target.value) }}
              />
            </div>

            <div className="mb-3">
            <label className='fs-5 fw-bold'> Type:-</label><input type="radio"
                className='ms-3'
                name="amounttype"
                value="credit"
                checked={type === "credit"}
                onChange={(e) => {
                  if (e.target.checked) {
                    setType(e.target.value)

                  }
                }}
              />  Credited
              <input type="radio"
                className='ms-3'
                name="amounttype"
                value="debit"
                checked={type === "debit"}
                onChange={(e) => {
                  if (e.target.checked) {
                    setType(e.target.value)

                  }
                }}
              />  Debited

            </div>
            <div className="mb-3 mt-1" >
            <label className='fs-5 fw-bold'> Category</label><br/>
            <select  value={category} onChange={(e) => {
              setCategory(e.target.value)
            }} className='mt-2 category-select' >
              <option disabled >select category here </option>
              <option value="food">Food</option>
              <option value="shopping">Shopping</option>
              <option value="rent">Rent</option>
              <option value="entertainment">Entertainment</option>
              <option value="travel">Travel</option>
              <option value="salary">Salary</option>
              <option value="other">Other</option>
            </select>
            </div>
           

            <div className="mb-3">
            <label className='fs-5 fw-bold mt-1'>Description</label>
              <input type="text" className="form-control mt-1"
                placeholder="Enter  here .... "
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}

              />
            </div>

            <div class="d-grid gap-2">
            <button className="btn button mt-3"
              type="button" onClick={ updateTransaction }>Update Transacation </button>
          </div>

          </div>
        </form>
        </div>
      </div>
      
    </div>
  )
}

export default Updatetransacation

