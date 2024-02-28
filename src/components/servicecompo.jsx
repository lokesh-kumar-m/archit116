import React from "react";

function Compo({link,name}){

  return(
    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
      <div className='sx card'>
        <img
          src={link}
          alt="imag"
          />
      </div>
      <h2 className='x'>{name}</h2>
    </div>
  )
}
export default Compo;
