import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'

const Signup = () => {
  // userName,passWord,email,address,mobileNo,bankName

  const [userName, setUserName] = useState('')
  const [passWord, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [mobileNo, setmobileNo] = useState('')
  const [bankName, setBankName] = useState('')

  const signup = async()=>{

    const response = await axios.post('/api/v1/signups')

    



  }
  

  return (
    <div>
      <Navbar />
      <h1>Sign up</h1>
      <div className='col-md-6'>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control"
              placeholder="enter username "
              value={userName}
            />
          </div>

          <div className="mb-3">
            <input type="password"
              className="form-control"
              placeholder='enter password here'
              value={passWord} />
          </div>

          <div className="mb-3">
            <input type="email"
              className="form-control"
              placeholder='email'
              value={email} />
          </div>
          <div className="mb-3">
            <input type="text"
              className="form-control"
              placeholder='mobile number'
              value={mobileNo} />
          </div>

          <div className="mb-3">
            <input type="text"
              className="form-control"
              placeholder='Address'
              value={address} />
          </div>

          <div>
            <select class="form-select" >
              <option selected>Bank Name </option>
              <option value="SBI">SBI</option>
              <option value="canera">Canera</option>
              <option value="3">Three</option>
            </select>
          </div>


        </form>

      </div>





    </div>
  )
}

export default Signup
