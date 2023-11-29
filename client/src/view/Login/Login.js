import React,{useState, useEffect} from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Login.css'
import axios from 'axios'
import showToast from 'crunchy-toast';
import { Link } from 'react-router-dom'

const Login = () => {

  const [email,setEmail]=useState('');
  const [passWord,setPassWord]=useState('');



  const login= async()=>{
    const response = await axios.post('/api/v1/logins',{
      email,passWord
    })

         
      
       showToast(response?.data?.message, 'danger', 8000);


       if(response?.data?.success){
        localStorage.setItem('userMoneyMinder',JSON.stringify(response?.data?.data))
        window.location.href="/"
       
       }
  }

  useEffect(()=>{

    const loginUser = JSON.parse(localStorage.getItem('userMoneyMinder'))
    console.log(loginUser)

      if(loginUser?.email){
        showToast('you already login', 'success', 5000);
        window.location.href="/"

      }

  },[])
  return (
    <div>
      <Navbar/>
       
        <div>
          <form className='login-form-container'>
            <div>
            <h3 className='text-center'>Login</h3>

            <div className="mb-3">
              <input type="email" className="form-control"
                placeholder="Enter email here .... "
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}

              />
            </div>

            <div className="mb-3">
              <input type="password"
                className="form-control"
                placeholder='enter password here'
                value={passWord}
                onChange={(e) => { setPassWord(e.target.value) }}

              />

           <div class="d-grid gap-2">
            <button className="btn btn-primary mt-3"
              type="button" onClick={login}>Login ➡</button>
          </div>
            </div>

            <p><Link to='/login'>Create a new account ?</Link></p>
            </div>
          </form>
        </div>
      
    </div>
  )
}

export default Login
