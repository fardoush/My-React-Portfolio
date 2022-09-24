import React from 'react';
import './Home.css';
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter,FaGithub ,FaReact,FaCode} from "react-icons/fa";
import bannerImage from '../../Images/banner1.png';
import BannerCard from './BannerCard';



const Home = () => {
  return (
    <div className="banner-section">
        <div className="container">
        <div className="banner-wrapper">
      <div className="banner-content-inner">
      <h1 className="name">Hi...! I'm 
      <br />
      <span>Jahanara Fardoush</span></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem inventore, laboriosam veritatis voluptatibus quam aspernatur officiis aut ex vitae consequuntur.</p>

      <button className="home-btn btn">HIre Me</button>

      <div className="social-icon">
        <a href="#gh" className=""> 
        <FaFacebookF/>
         </a>
         <a href="#gh" className=""> 
        <FaInstagram/>
         </a>
         <a href="#ghj" className=""> 
        <FaLinkedinIn/>
         </a>
         <a href="#ghh" className=""> 
        <FaTwitter/>
         </a>
         <a href="#" className=""> 
        <FaGithub/>
         </a>
      </div>
      </div>
      <div className="banner-images">
      {/* <div className='shape1'></div> */}
    <div className="banner-img">
    <img src={bannerImage} alt="" />
    </div>
    <div className="react-div">

    <BannerCard  tex1='React' tex2='Developer'/>
    </div>
    <div className='frontendDiv'>
    
    <BannerCard  tex1='Front End' tex2='Developer'/>
    </div>
    <div className="banner-blur1"> </div>
    <div className="banner-blur2"> </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Home;