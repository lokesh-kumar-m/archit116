import React from "react";

function Project(props){
  return(
    <div className='col-lg-3 col-md-6 col-sm-12'>
    <div className='card pc'>
     <img
       src={props.link}
       alt={props.alt}
       />
       <p>{props.text}</p>
    </div>
    </div>
  )
}
export default Project;
