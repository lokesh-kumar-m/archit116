import React from "react";

function Card(props){
  return(
    <div className='col-lg-3 col-md-6 col-sm-12 trx'>
    <div className='card cirx'>
     <div className='cir1'>
     <div className='card cir'>
     <img
     src={props.link}
     alt={props.alt}
     />
     </div>
     </div>
     <p className='nmx'>{props.text}</p>
    </div>
    </div>
  )
}

export default Card;
