import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const[user,setUser]= useState({})

  useEffect(()=>{
   const storeUser= JSON.parse(localStorage.getItem("userMoneyMinder") ||"{}")
    setUser(storeUser)
  
  },[])



  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-nav">
  <div className="container-fluid">
    <Link className="navbar-brand text-light nav-item" to="#"> MoneyMinder 💰</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse   " id="navbarNav">
      <ul className="navbar-nav ms-lg-auto ">
        <li className="nav-item">
          <Link className="nav-link text-light ms-4 fs-5 nav-item" aria-current="page" to="/"> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light ms-4 fs-5 nav-item" to="/addtransaction">Add Transaction</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light ms-4 fs-5 nav-item" to="/mytransacation"> MyTransactions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light ms-4 fs-5 nav-item" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light ms-4 fs-5 nav-item" to="/login">Login</Link>
        </li>
        <li className='text-light nav-link ms-4 fs-5 nav-item'> 👋 Hello,{user.userName || 'User!'}</li>
     

        
      </ul>
     

      {
        user.userName ?( <span className='text-light ms-3 fs-5 logout-link nav-item' onClick={()=>{
          localStorage.removeItem('userMoneyMinder')
          window.location.href='/login'
        }}>Logout</span>):null
      }
    </div>
  </div>
</nav>

        
      
    </div>
  )
}

export default Navbar
