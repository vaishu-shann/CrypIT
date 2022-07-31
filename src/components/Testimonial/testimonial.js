import React from 'react';
import "./testimonial.css"
import Aave from "../../assests/images/aavee.png"
import Eth from "../../assests/images/eth.png"

function Testimonial(props) {
    return (
        <div className='testimonial-section' id="testimonial">
            <h1 className='test-head'>Testimonials</h1>

            <div className='test-cont'>
                <div className='test-box'>
                    <p className='box-detail'>“We need wide adoption of social recovery wallets.”</p>
                    <div className='profile'>
                        <img  className="coin" src={Eth} alt="aave"/>
                        <p className='founder'>Vitalik Buterin <br/>
Co-founder, Ethereum</p>
                    </div>
                </div>
                <div className='test-box'>
                <p className='box-detail'>“Argent has done so much for making DeFi a user-friendly experience.”</p>
                <div className='profile'>
                <img  className="coin" src={Eth} alt="aave"/> 
                <p className='founder'>Vitalik Buterin <br/>
Co-founder, Ethereum</p>
                    </div>
                </div>
                <div className='test-box'>
                <p className='box-detail'>“Argent is crypto's iPhone moment - highly secure with a user experience finance apps."</p>
                <div className='profile'>
                <img className="coin"  src={Eth} alt="aave"/> 
                <p className='founder'>Vitalik Buterin <br/>
Co-founder, Ethereum</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;