import React from 'react';
import {FaReact,FaCode} from "react-icons/fa";
import './BannerCard.css';

const BannerCard = ({tex1,tex2}) => {
  return (
    <div className='bannerCard'>
 <FaReact className='reactIcon'/>
      <FaCode className='codeIcon'/>
      <span>
        {tex1} 
        <br />
        {tex2}
      </span>
    </div>
  )
}

export default BannerCard