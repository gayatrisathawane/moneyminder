import React, { useState ,useEffect} from 'react'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import "./Signup.css"
import sign from './../../assets/signupbg.jpg';
import {Link} from 'react-router-dom'

const Signup = () => {
  // userName,passWord,email,address,mobileNo,bankName

  const [userName, setName] = useState('')
  const [passWord, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [mobileNo, setmobileNo] = useState('')
  const [bankName, setBankName] = useState('')

  const signup = async () => {

    if (!userName) {
      alert("Name is required")
      return;
    }
    if (!passWord) {
      alert("password is required")
      return;
    }

    if (!email) {
      alert("email is required")
      return;
    }

    if (!address) {
      alert("address is required")
      return;
    }
    if (!mobileNo) {
      alert("mobileNo is required")
      return;
    }

    if (!bankName) {
      alert("BankName is required")
      return;
    }
    const response = await axios.post('/api/v1/signups',
      {
        userName, passWord, email, mobileNo, bankName, address
      })

    alert(response?.data?.message)

      if(response?.data?.success){
        window.location.href='/login'
      }
  }

  useEffect(()=>{

    const loginUser = JSON.parse(localStorage.getItem('userMoneyMinder'))
    console.log(loginUser)

      if(loginUser?.email){
        alert("you already login")
        window.location.href="/"

      }
  },[])


  return (
    <div>
      <Navbar />
      <div className='signup-container'>
        <h1 className='text-center'>Sign up</h1>
      </div>
      <div className='row' >
        <div className='col-md-2'></div>
        <div className='col-md-4'>
          <img src={sign} height="250px" alt='sign' />
        </div>
        <div className='col-md-4'>

          <form>
            <div className="mb-3">
              <input type="text" className="form-control"
                placeholder="Enter name here .... "
                value={userName}
                onChange={(e) => { setName(e.target.value) }}

              />
            </div>

            <div className="mb-3">
              <input type="password"
                className="form-control"
                placeholder='enter password here'
                value={passWord}
                onChange={(e) => { setPassword(e.target.value) }}

              />
            </div>

            <div className="mb-3">
              <input type="email"
                className="form-control"
                placeholder='email'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="mb-3">
              <input type="text"
                className="form-control"
                placeholder='mobile number'
                value={mobileNo}
                onChange={(e) => { setmobileNo(e.target.value) }}
              />
            </div>

            <div className="mb-3">
              <input type="text"
                className="form-control"
                placeholder='Address'
                value={address}
                onChange={(e) => { setAddress(e.target.value) }}

              />
            </div>

            <div>
              <select class="form-select" value={bankName} onChange={(e) => { setBankName(e.target.value) }}>
                <option selected>Bank Name </option>
                <option value="SBI">SBI</option>
                <option value="canera">Canera</option>
                <option value="">Three</option>
              </select>
            </div>
          </form>

          <div class="d-grid gap-2">
            <button className="btn btn-primary mt-3"
              type="button" onClick={signup}>SignUp</button>
          </div>

        </div>
         <p><Link to='/login'>Have already account </Link></p>
      </div>

    </div>
  )
}

export default Signup
