import React, { useState ,useEffect} from 'react'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import "./Signup.css"
import sign from './../../assets/signupbg.jpg';
import {Link} from 'react-router-dom'
import showToast from 'crunchy-toast';

const Signup = () => {

  const [userName, setName] = useState('')
  const [passWord, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [mobileNo, setmobileNo] = useState('')
  const [bankName, setBankName] = useState('')

  const signup = async () => {

    if (!userName) {
    showToast("userName is required", 'danger', 8000);
      return;
    }
    if (!passWord) {
     showToast("Password is required", 'danger', 8000);
      return;
    }

    if (!email) {
      showToast("Email is required", 'danger', 8000);
      return;
    }

    if (!address) {
      showToast("Address is required", 'danger', 8000);
      return;
    }
    if (!mobileNo) {
      showToast(" MobileNo is required", 'danger', 8000);
      return;
    }

    if (!bankName) {
      showToast("BankNAme is required", 'danger', 8000);
      return;
    }
    const response = await axios.post('/api/v1/signups',
      {
        userName, passWord, email, mobileNo, bankName, address
      })

  
    showToast(response?.data?.message, 'danger', 8000);
    
      if(response?.data?.danger){
        window.location.href='/login'
      }
  }

  useEffect(()=>{

    const loginUser = JSON.parse(localStorage.getItem('userMoneyMinder'))
    console.log(loginUser)

      if(loginUser?.email){
        showToast('you already login', 'success', 3000);
    
        window.location.href="/"

      }
  },[])


  return (
    <div>
      <Navbar />
      <div className='signup-container'>

        <h2 className='text-center'>Sign up</h2>

        <div className='mt-4'>
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
                placeholder='Enter password here..'
                value={passWord}
                onChange={(e) => { setPassword(e.target.value) }}

              />
            </div>

            <div className="mb-3">
              <input type=" Enter Email here.."
                className="form-control"
                placeholder='email'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="mb-3">
              <input type="text"
                className="form-control"
                placeholder=' Eneter Mobile Number ...'
                value={mobileNo}
                onChange={(e) => { setmobileNo(e.target.value) }}
              />
            </div>

            <div className="mb-3">
              <input type="text"
                className="form-control"
                placeholder=' Enter Address Here...'
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
            <button className="btn button mt-3"
              type="button" onClick={signup}>SignUp</button>
          </div>

        </div>
         <p className='text-center mt-2'><Link to='/login' className='text-decoration-none'>Have already account </Link></p>
      </div>
      </div>

  
  )
}

export default Signup
