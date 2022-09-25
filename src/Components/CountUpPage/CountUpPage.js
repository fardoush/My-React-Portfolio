import React, { useState } from 'react';
import './CountUpPage.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CountUpPage = () => {

const [counterOn,setCounterOn] = useState(false);
  //const [counterOn,setCounterOn] = useState(false);
  return (
    
    <ScrollTrigger onEnter ={()=>setCounterOn(true)} onExit = {() => setCounterOn(false)}>

<div className="countUp-wrapper">
        <div className="container">
        <div className="countUp-inner">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12">
      <div className="card counts">
            <span>Icon</span>
            <h2>
            {counterOn && <CountUp start={0} end={77} duration={2} delay={0}/>}
                
              
            </h2>
            <h6>Project Done</h6>
        </div>

      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
      <div className="card counts">
            <span>Icon</span>
            <h2>
            {counterOn && <CountUp start={0} end={77} duration={2} delay={0}/>}
                
              
            </h2>
            <h6>Happy Customers</h6>
        </div>

      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
      <div className="card counts">
            <span>Icon</span>
            <h2>
            {counterOn && <CountUp start={0} end={77} duration={2} delay={0}/>}
                
              
            </h2>
            <h6>Working Hours</h6>
        </div>

      </div>

      <div className="col-lg-3 col-md-3 col-sm-12">
      <div className="card counts">
            <span>Icon</span>
            <h2>
            {counterOn && <CountUp start={0} end={77} duration={2} delay={0}/>}
                
              
            </h2>
            <h6>Awards Won</h6>
        </div>

      </div>
    </div>




        </div>
        </div>
    </div>

    </ScrollTrigger>
  )
}

export default CountUpPage;