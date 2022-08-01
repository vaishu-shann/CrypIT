import React from "react";
import "./testimonial.css";
import Eth from "../../assests/images/eth.png";
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
            “We need wide adoption of social recovery wallets.”
          </p>
          <div className="profile">
            <img className="coin" src={Eth} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
            “Argent has done so much for making DeFi a user-friendly
            experience.”
          </p>
          <div className="profile">
            <img className="coin" src={Eth} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
            “Argent is crypto's iPhone moment - highly secure with a user
            experience finance apps."
          </p>
          <div className="profile">
            <img className="coin" src={Eth} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
            “We need wide adoption of social recovery wallets.”
          </p>
          <div className="profile">
            <img className="coin" src={Eth} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
            “Argent has done so much for making DeFi a user-friendly
            experience.”
          </p>
          <div className="profile">
            <img className="coin" src={Eth} alt="aave" />
            <p className="founder">
              Vitalik Buterin <br />
              Co-founder, Ethereum
            </p>
          </div>
        </div>
        <div className="test-box">
          <p className="box-detail">
            “Argent is crypto's iPhone moment - highly secure with a user
            experience finance apps."
          </p>
          <div className="profile">
            <img className="coin" src={Eth} alt="aave" />
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

