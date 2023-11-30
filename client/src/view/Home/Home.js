import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'


const Home = () => {






  return (

    <div >
      <Navbar />
      <div className='homebg'>
      <p className=' home-heading text-center '> WELCOME TO  💰<span className='text-danger'>MONEYMINDER </span>APP </p>
        
        <div className='info-home'>
       <p >
       Divvy desires to become a financial nervous system for small and medium businesses.  For them, this means designing software that makes money smarter and delivers speedy financial information that customers can’t live without.
       The mobile app allows expense tracking such as fuel, travel, meals and more. Artificial Intelligence and Machine Learning automatically extract data from receipts and invoices, processing online payments seamlessly.   
       </p>
       </div>

      </div>




    </div>
  )
}

export default Home
