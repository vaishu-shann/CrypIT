import React from 'react';
import "./hero.css"
import AppleStore from "../../assests/images/app-store-light.svg"
import GoogleStore from "../../assests/images/google-play-light.svg"
import BannerImage from "../../assests/images/hero-img.png"
import FadeIn from 'react-fade-in';

function HeroSection(props) {
    return (
      
        <div className='hero-section'>
            <div className='left-cont'>
                <h1>HODL, EARN, SPEDN</h1>
                <p>We built CrypIT to make your Fiat to Crypto transfers &amp; spendings much easier and seamless than ever.</p>
                <div className='get-playstore'>
                    <img className='play-img'  src={AppleStore} alt="appstore"/>
                    <img  className='play-img' src={GoogleStore} alt="googleplay"/> 
                </div>
            </div>

            <div className='right-cont'>
                <img className='hero-img' src={BannerImage} alt="hero Image"/>
            </div>
        </div>
       
    );
}

export default HeroSection;