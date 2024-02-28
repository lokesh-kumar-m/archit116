import React from "react";

function Inpt(props){
  return(
    <div className="form-group mx-sm-3 mb-2">
      <label>{props.lab}</label>
      <input className='form-control' type={props.type} name={props.name} placeholder={props.place} />
    </div>
  )
}
export default Inpt;
