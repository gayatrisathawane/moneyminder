import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'
import axios from 'axios'

const Home = () => {
  // amount, type, category, description

  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')



const loadTransacation = async()=>{

  const response = axios.post('/api/v1/transacation',{
    amount,category,type,description
  })

  if(response?.data?.response){
    window.location.href='/mytransacation'
  }



}
 


  return (

    <div>
      <Navbar />
      <h1 className='text-center'> 💰 MoneyMinder 💵</h1>

      <div>
        <form>

          <div className='transacation-form-container'>
            <div className="mb-3">
              Amount
              <input type="Number" className="form-control"
                placeholder="Enter Amount here .... "
                value={amount}
                onChange={(e) => { setAmount(e.target.value) }}
              />
            </div>

            <div className="mb-3">
              Type:<input type="radio"
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
            <div className="mb-3" >
              <label >Category</label><br/>
            <select  value={category} onChange={(e) => {
              setCategory(e.target.value)
            }} >
              <option disabled>select category here </option>
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
              <label>Description</label>
              <input type="text" className="form-control"
                placeholder="Enter  here .... "
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}

              />
            </div>

            <div class="d-grid gap-2">
            <button className="btn btn-primary mt-3"
              type="button">Add Transacation </button>
          </div>

          </div>
        </form>
      </div>




    </div>
  )
}

export default Home
