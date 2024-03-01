import React from 'react';
import "../Styles/Home.css";
import { Edu, Mail, phone ,Tw , yt , insta , fb , Add, Left, right, One, two  } from '../assets/assets';

const Home = () => {

  const handleClickOnLeft = (e) => {
    let a = document.querySelector(".images");
    a.scrollLeft = -1360;
    console.log(a);
  }
  
  const handleClickOnRight = (e) => {
    let a = document.querySelector(".images");
    
    for(let i = 0; i<=1360 ; i++){
      setTimeout(()=>{
        console.log("i am in loop")
        a.scrollLeft = i;
      },100)
    }
    console.log(a);
  }
  return (
    <div>
    <div className='home' >
      <div className="Un-details">
        <p className='welcome' >Welcome to</p>
        <h1>Dharmshastra
        <p>National Law University Jabalpur Madhya Pradesh </p>
        </h1>
        <div className='call contact-details' >
            <img src={phone} width="25px" alt="" />
            <p> <b>Phone</b> : +91-761-2600070</p>
        </div>
        <div className='email contact-details' >
            <img src={Mail} width="25px" alt="" />
            <p><b>Email</b> : info@mpdnlu.ac.in</p>
        </div>
        <div className="socila-media-links">
           <a href="#"> <img src={Add} width="30px" title='Address' alt="" /> </a>
           <a href="#"> <img src={yt} width="30px" title='Youtube' alt="" /> </a>
           <a href="#"> <img src={Tw} width="30px" title='Twitter' alt="" /> </a>
           <a href="#"> <img src={fb} width="30px" title='Facebook' alt="" /> </a>
           <a href="#"> <img src={insta} width="30px" title='Instagram' alt="" /> </a>
           
           
           
        </div>
      </div>
      <div className="vector">
        <img src={Edu} width="500px" alt="" />
      </div>
    </div>

    <section className='carasoul' >
      <br />
      <br />
      <center><h2 className='recent-event' >Recent Events</h2></center>
      <br />
      <br />
      <div className='left' onClick={handleClickOnLeft} > 
      <img src={Left} width="20px" alt="" />
      </div>
      <div className='images' >
        <img src={One}  alt="" />
        <img src={two}  alt="" />
      </div>
      <div className='right'  onClick={handleClickOnRight} >
      <img src={right} width="20px" alt="" />
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  </div>
  )
}

export default Home;