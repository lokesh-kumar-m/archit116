import React from "react";
import ab from "../images/abt.jpg";
import"./aboutus.css";

function About(){

  return(
    <div className='abt' id='about'>
     <div className='row'>
       <div className='col-lg-5 col-md-7 col-sm-12 col-12'>
         <div className='card'>
           <img src={ab} alt="about"/>
         </div>
       </div>
       <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
       <hr className='ah'/>
         <h2 className='af'>About <strong>Us</strong></h2>
          <p className='pg'>
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
       </div>
     </div>
    </div>
  )
}
export default About;
