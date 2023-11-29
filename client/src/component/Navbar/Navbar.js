import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const[user,setUser]= useState({})

  

  
  useEffect(()=>{
   const storeUser= JSON.parse(localStorage.getItem("userMoneyMinder") ||"{}")
    setUser(storeUser)
  
  },[])

  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="#"> MoneyMinder 💰</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/mytransacation"> 💵 MyTransactions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light " to="/login">Login</Link>
        </li>
        
      </ul>
      <span className='text-light'> 👋 Hello,{user.userName || 'User!'}</span>
    </div>
  </div>
</nav>

        
      
    </div>
  )
}

export default Navbar
