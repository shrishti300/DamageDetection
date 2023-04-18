import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Image from "../assets/img.jpeg";
import Backg from "../assets/Layer_1.png";
import Damage from "../assets/damage2.png";
import Damage2 from "../assets/damage3.png";

const Result = (props) => {

  return (
    <div>
    <Navbar />
    <img src={Backg} className='absolute'/>
      <div className='home text-6xl  bg-blue-900 text-white flex flex-justify justify-center'>
        <p className='justify-center justify-items-center font-bold m-32'> OBJECT DAMAGE ANALYSIS</p> 
      </div>
      
      <div className='mt-32 ml-16 grid grid-cols-2 '>
      
      <div className='justify-self-center bg-gray-200 p-16'>
       <img src={Damage} className='w-124 h-96'></img>
       </div>
       <div className='flex flex-col bg-gray-100 mr-16 p-16'>
       <div className='item-center'>
        <p className='text-5xl'>Result</p>
        </div>
        <div className='mt-8 text-red-600'>
            <p className='text-2xl font-bold'>DAMAGE DETECTED !</p>
        </div>
       </div>
       
      </div>
    </div>
  )
}

export default Result
