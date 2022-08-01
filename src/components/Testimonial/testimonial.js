import React from "react";
import "./testimonial.css";
import Avatar1 from "../../assests/images/avatar1.jpg";
import Avatar2 from "../../assests/images/avatar2.jpg";
import Avatar3 from "../../assests/images/avatar3.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Testimonial(props) {
  return (
    <div className="testimonial-section" id="testimonial">
      <h1 className="test-head">Testimonials</h1>

      <Carousel showDots={true} responsive={responsive} >
        <div className="test-box">
          <p className="box-detail">
          “You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save."
          </p>
          <p className='stars'>⭐⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar1} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
          “I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all."

          </p>
          <p className='stars'>⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar2} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
          “You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save."

          </p>
          <p className='stars'>⭐⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar3} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
          “I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all."
          </p>
          <p className='stars'>⭐⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar1} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
          “Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly kick ass. Thanks for being so awesome. High fives!”
          </p>
          <p className='stars'>⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar2} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
          “You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save."
          </p>
          <p className='stars'>⭐⭐⭐⭐</p>
          <div className="profile">
            <img className="coin" src={Avatar3} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonial;

