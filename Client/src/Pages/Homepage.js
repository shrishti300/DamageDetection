import React, {useState} from 'react'
import Navbar from '../Components/Navbar';
import Backg from "../assets/Layer_1.png";
import Result from './Result';
import Computer from "../assets/computer.png";
const Homepage = () => {
    const [img, setImg] = useState("");
    const [link, setLink] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    //console.log(img[0].name);
    const submitForm = (e) =>{
      // const [newEntry, setNewEntry] = useState([]); 
       e.preventDefault(); 
       if(link || img){
       const newEntry = {id:new Date().getTime().toString(), link: link};
       setAllEntry([...allEntry, newEntry]);
       console.log(newEntry);
       setImg("");
       setLink("");
    }else{
        alert("plz fill the data");
    }
    }
  return (
    <div className='overflow-hidden relative'>
      <Navbar />
      <img src={Backg} className='absolute'/>
      <div>
      <div className='home text-6xl  bg-blue-900 text-white flex flex-justify justify-center'>
        <p className='justify-center justify-items-center font-bold m-32'> OBJECT DAMAGE ANALYSIS</p> 
      </div>
      
      
      <div>
      <form action='' onSubmit={submitForm}>
      <div className='grid grid-cols-3'>
        <div className='bg-gray-100 static p-32 m-16 hover:shadow-md hover:shadow-slate-500  '>
        <p className='text-3xl font-bold text-blue-400 pb-8'>DAMAGED LAPTOPS<span className='text-4xl'>📥</span></p>
            <p className='pb-4 text-2xl align-self-center'>CLICK HERE!</p>
            <div className='grid grid-col-2'>
            <div>
            <a href="https://demo.roboflow.com/broken-laptop-parts/1?publishable_key=rf_2p6uEVIdM8SIlpaZCdR0QnPu69F2">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105 mb-4'>detetct live </p>
        </a>
        
        </div>
        <div>
        <a href="https://detect.roboflow.com/?model=broken-laptop-parts&version=1&api_key=nqqsamZVsi9oLT8brZLk">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105'>add image here  </p>
        </a>
        </div>
        </div>
       
        </div>

        <div className='bg-gray-100 p-32 m-16 hover:shadow-md hover:shadow-slate-500  '>
        <p className='text-3xl font-bold text-blue-400 pb-8'>DAMAGED BUILDING <span className='text-4xl'>📥</span></p>
            <p className='pb-4 text-2xl align-self-center'>CLICK HERE!</p>
            <div className='grid grid-col-2'>
            <div>
            <a href="https://demo.roboflow.com/damaged-objects/1?publishable_key=rf_2p6uEVIdM8SIlpaZCdR0QnPu69F2">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105 mb-4'>detetct live </p>
        </a>
        </div>
        <div>
        <a href="https://detect.roboflow.com/?model=broken-electronic-objects&version=1&api_key=nqqsamZVsi9oLT8brZLk">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105'>add image here  </p>
        </a>
        </div>
        </div>
        </div>




        <div className='bg-gray-100 p-32 m-16 hover:shadow-md hover:shadow-slate-500  '>
        <p className='text-3xl font-bold text-blue-400 pb-8'> BROKEN ELECTRONIC OBJECT  <span className='text-4xl'>📥</span></p>
            <p className='pb-4 text-2xl align-self-center'>CLICK HERE!</p>
            <div className='grid grid-col-2'>
            <div>
            <a href="https://demo.roboflow.com/broken-electronic-objects/1?publishable_key=rf_2p6uEVIdM8SIlpaZCdR0QnPu69F2">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105 mb-4'>detetct live </p>
        </a>
        </div>
        <div>
        <a href="https://detect.roboflow.com/?model=broken-electronic-objects&version=1&api_key=nqqsamZVsi9oLT8brZLk">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105'>add image here  </p>
        </a>
        </div>
        </div>
        </div>

        <div className='bg-gray-100 p-32 m-16 hover:shadow-md hover:shadow-slate-500  '>
        <p className='text-3xl font-bold text-blue-400 pb-8'> CRACK DETECTION<span className='text-4xl'>📥</span></p>
            <p className='pb-4 text-2xl align-self-center'>CLICK HERE!</p>
            <div className='grid grid-col-2'>
            <div>
            <a href="https://demo.roboflow.com/crack-detection-3dtm3/1?publishable_key=rf_4zNi3lze4bbQuJlE3bzbeZt4hAU2">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105 mb-4'>detetct live </p>
        </a>
        </div>
        <div>
        <a href="https://detect.roboflow.com/?model=crack-detection-3dtm3&version=1&api_key=7cDRx7aWqmTIE7rTBG3w">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105'>add image here  </p>
        </a>
        </div>
        </div>
        
        </div>
        <div className='bg-gray-100 p-32 m-16 hover:shadow-md hover:shadow-slate-500  '>
        <p className='text-3xl font-bold text-blue-400 pb-8'> BROKEN VEHICLES <span className='text-4xl'>📥</span></p>
            <p className='pb-4 text-2xl align-self-center'>CLICK HERE!</p>
            <div className='grid grid-col-2'>
            <div>
            <a href="https://demo.roboflow.com/broken-vehicles-2cl4r/1?publishable_key=rf_4zNi3lze4bbQuJlE3bzbeZt4hAU2">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105 mb-4'>detetct live </p>
        </a>
        </div>
        <div>
        <a href=".https://detect.roboflow.com/?model=broken-vehicles-2cl4r&version=1&api_key=7cDRx7aWqmTIE7rTBG3w">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105'>add image here  </p>
        </a>
        </div>
        </div>
        </div>


        <div className='bg-gray-100 m-16 p-32  hover:shadow-md hover:shadow-slate-500'>
        <p className='text-3xl font-bold text-blue-400 pb-8'>BROKEN MOTORBIKE<span className='text-4xl'>📥</span></p>
            <p className='pb-4 text-2xl align-self-center'>CLICK HERE!</p>
            <div className='grid grid-col-2'>
            <div>
            <a href="https://demo.roboflow.com/broken-motorcycles/2?publishable_key=rf_4zNi3lze4bbQuJlE3bzbeZt4hAU2">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105 mb-4'>detetct live </p>
        </a>
        </div>
        <div>
        <a href="https://detect.roboflow.com/?model=broken-motorcycles&version=2&api_key=7cDRx7aWqmTIE7rTBG3w">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105'>add image here  </p>
        </a>
        </div>
        </div>
        </div>
        
        <div className='bg-gray-100 m-16 p-32  hover:shadow-md hover:shadow-slate-500'>
        <p className='text-3xl font-bold text-blue-400 pb-8'>BROKEN BONE <span className='text-4xl'>📥</span></p>
            <p className='pb-4 text-2xl align-self-center'>CLICK HERE!</p>
            <div className='grid grid-col-2'>
            <div>
            <a href="https://demo.roboflow.com/broken-areas-of-body/1?publishable_key=rf_5pjS49TWEthaJ4z9gzVYb3R5V4G2">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105 mb-4'>detetct live </p>
        </a>
        </div>
        <div>
        <a href="https://detect.roboflow.com/?model=broken-areas-of-body&version=1&api_key=l5cQZOGvCkApHR9vdtAn">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105'>add image here  </p>
        </a>
        </div>
        </div>
        </div>

           <div className='bg-gray-100 m-16 p-32  hover:shadow-md hover:shadow-slate-500'>
        <p className='text-3xl font-bold text-blue-400 pb-8'>CROP DAMAGE <span className='text-4xl'>📥</span></p>
            <p className='pb-4 text-2xl align-self-center'>CLICK HERE!</p>
            <div className='grid grid-col-2'>
            <div>
            <a href="https://demo.roboflow.com/crop-damaged/1?publishable_key=rf_5pjS49TWEthaJ4z9gzVYb3R5V4G2">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105 mb-4'>detetct live </p>
        </a>
        </div>
        <div>
        <a href="https://detect.roboflow.com/?model=crop-damaged&version=1&api_key=l5cQZOGvCkApHR9vdtAn">
        <p className='bg-blue-800 text-white font-bold text-2xl rounded-3xl px-8 py-4 hover:scale-105'>add image here  </p>
        </a>
        </div>
        </div>
        </div>
      </div>
      {/*<div className='flex flex-col flex-justify-center'>
      <div className='flex justify-center'>
      <a href="./Result">
        <p className='bg-blue-800 text-white font-bold text-3xl rounded-3xl px-16 py-4 hover:scale-105'>Submit</p>
        </a>
        </div>
      </div>
      */
      }
      </form>
      </div>
      </div>
     
    </div>
  )
}

export default Homepage
