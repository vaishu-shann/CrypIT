import React from 'react';
import "./feature.css"
import FeatureImg1 from "../../assests/images/fiat-crypto4.png"
import FeatureImg2 from "../../assests/images/flexible.png"
import FeatureImg3 from "../../assests/images/bank1.0.png"
import FeatureImg4 from "../../assests/images/earn2.png"

function Feature(props) {
    return (
        <div className='feature-section' id="feature">
            <h1 className='feature-head'> Features </h1>
            <div className='feature-cont'>
                <div className='cont-1'>
                    <img src={FeatureImg1} alt="img1" width={390}/>
                    <div className='detail1'>
                        <h1 className='detail-head'>Fiat &#60; &#62; Crypto</h1>
                        <p className='detail-para'>Sit and relax between your Fiat &amp; Crypto, because CrypIT made Fiat to Crypto transfers easy, flexible &amp; more secured</p>
                    </div>
                </div>
                <div className='cont-2'>
                    <div className='detail2'>
                        <h1 className='detail-head'>Flexible </h1>
  
                            <ul className='detail-list'>
                                <li>Manage all your exchange &amp; wallet HODLings in single mobile app</li>
                                <li>Buy crypto using your favourite payment system</li>
                                <li>Self transfer between your wallets</li>
                            </ul>
                            <p className='detail-para'> </p>
                    </div>
                    <img  src={FeatureImg2} alt="img1" width={350} height={305}/>
                </div>
                <div className='cont-1'>
                    <img src={FeatureImg3} alt="img1" width={400}/>
                    <div className='detail1'>
                        <h1 className='detail-head'>Super-Easy</h1>
                        <ul className='detail-list'>
                                <li>Link mobile number and set primary wallet for all in/out crypto transactions</li>
                                <li>Crypto Transfers using mobile number without worrying about wallet address</li>
                                <li>Hassle free UPI, QR code, Bank transfer from Crypto.</li>
                                <li>No more confusion with all crypto buzzwords &amp; complexity</li>
                            </ul>
                    </div>
                </div>

                <div className='cont-2'>
                    <div className='detail2'>
                        <h1 className='detail-head'>Earn </h1>
  
                            <ul className='detail-list'>
                                <li>Earn passive income on you crypto HODLings</li>
                                <li>Get Join Bonus &amp; Exciting Referral rewards</li>
                            </ul>
                            <p className='detail-para'> </p>
                    </div>
                    <img  src={FeatureImg4} alt="img1" width={300}/>
                </div>
            </div>
        </div>
    );
}

export default Feature;