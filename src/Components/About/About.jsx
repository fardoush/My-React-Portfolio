import React from 'react';
import './About.css';
import Resume from '../../../src/myResume.pdf';
import Image from '../../Images/img2.jpg';

const About = () => {
  return (
    <section className="aboutSection">
    <div className="container">
        <div className="about-wrapper">

        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-img">
                <img src={Image} alt="" className='img-fluid'/>
            </div>
            </div>


            {/* end col  */}
            <div className="col-lg-5 offset-lg-1 col-md-5 offset-md-1 col-sm-12">
            <div className="about-content">
                <h6 className="heading">About Me</h6>
                <h2>Who Am I?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Possimus, dignissimos? Id, aperiam?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Possimus, dignissimos? Id, aperiam?</p>

                <a href={Resume} className="btn downloadCv-btn" target="_blank">Download CV</a>
            </div>
            </div>
        </div>
        {/* <div className="about-img">
                <img src={Image} alt="" className='img-fluid'/>
            </div> */}

           

        </div>
       
    </div>
    </section>
  )
}

export default About;