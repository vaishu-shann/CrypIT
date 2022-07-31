import React from 'react';
import styled from 'styled-components';
import {FaLinkedinIn} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Profile1 from "../../assests/images/team-mate1.png"
import Profile2 from "../../assests/images/team-mate2.png"
import Profile3 from "../../assests/images/team-mate3.png"


function TeamMember(props) {
    return (
        <Member>
   <div className="team">
        <div className="member">
            <div className="card mb-3" style={{width: "20rem"}}>
                <img className="card-img-top" src={Profile1} height="380" alt="Card image cap"/>
                <div className="product-detail">
                    <h4 className="card-title heading text-center">TeamMate1</h4>
                    <span className="subheading">Designation</span>
                    <blockquote>
                   <p>'Little Bit Of Description About The teammate Like Size designation And role.'</p>
                    </blockquote>
                    <IconContext.Provider value={{ color: "greenyellow", className: "global-class-name",size:"22px" }} >
            <div className='socials' style={{padding:"6px 0", display:"block",margin:"1px auto" ,cursor:"pointer"}}>
              <FaLinkedinIn/>
            </div>
            </IconContext.Provider>
                   </div>
            </div>
        </div>
        <div className="member">
                <div className="card mb-3" style={{width: "20rem"}}>
                        <img className="card-img-top" src={Profile2}  height="380" alt="Card image cap"/>
                        <div className="product-detail">
                            <h4 className="card-title heading text-center">TeamMate2</h4>
                            <span className="subheading">Designation</span>
                            <blockquote>
                                <p>'Little Bit Of Description About The teammate Like Size designation And role.'</p>
                            </blockquote>
                            <IconContext.Provider value={{ color: "greenyellow", className: "global-class-name",size:"22px" }} >
            <div className='socials' style={{padding:"6px 0", display:"block",margin:"1px auto" ,cursor:"pointer"}}>
              <FaLinkedinIn/>
            </div>
            </IconContext.Provider>
                            
                           </div>
                    </div>
        </div>
        <div className="member">
            <div className="card mb-3" style={{width: "20rem"}}>
                <img className="card-img-top"src={Profile3}  height="380"  alt="Card image cap"/>
                <div className="product-detail">
                    <h4 className="card-title heading text-center">TeamMate3</h4>
                    <span className="subheading">Designation</span>
                    <blockquote>
                        <p>'Little Bit Of Description About The teammate Like Size designation And role.'</p>
                    </blockquote>
                    <IconContext.Provider value={{ color: "greenyellow", className: "global-class-name",size:"22px" }} >
            <div className='socials' style={{padding:"6px 0", display:"block",margin:"1px auto" ,cursor:"pointer"}}>
              <FaLinkedinIn/>
            </div>
            </IconContext.Provider>
                   </div>
            </div>
        </div>
    </div>

        </Member>
    );
}
const Member = styled.div`
   .team{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-evenly;
       align-items: center;
       .member{  
           position: relative;
       .card{
        transition: .4s all ease-in;
  border: none;
  margin: 25px auto;
  .card-img-top{
  box-shadow: 0 0 25px rgba(0,0,0,.05);
  width: 350px;
}
.carousel-control-next-icon 
{
  padding: 0 4px 0 0; 
}
.product-detail {
  position: absolute;
  width:100%;
  height: 75px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  overflow: hidden;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.35s;
  text-align: center;
box-sizing: border-box;
h4
{
  color: #fff;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  margin: 3px 0;
 
}
.subheading {
  font-weight: 400;
  margin:5px 0;
  font-size: 17px;
  letter-spacing: 1px;
  text-align: center;
  color: greenyellow;
}
blockquote 
{
  color: #fff;
  padding: 0;
  margin:15px 0;
  font-style: italic;
  font-size: 16px;
  
}
}
       }
       .card:hover .product-detail {
  height: calc(92%);
  padding-top: 100px;
}
   }
}
`;
export default TeamMember;