import React from 'react';
import "./team.css"
import {FaLinkedinIn} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Profile1 from "../../assests/images/team-mate1.png"
import Profile2 from "../../assests/images/team-mate2.png"
import Profile3 from "../../assests/images/team-mate3.png"


function TeamMember(props) {
    return (
        <div>
   <div className="team">
        <div className="member">
            <div className="card mb-3" style={{width: "20rem"}}>
                <img className="card-img-top" src={Profile1} height="380" alt="Card cap"/>
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
                        <img className="card-img-top" src={Profile2}  height="380" alt="Card cap"/>
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
                <img className="card-img-top"src={Profile3}  height="380"  alt="Card  cap"/>
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

        </div>
    );
}

export default TeamMember;