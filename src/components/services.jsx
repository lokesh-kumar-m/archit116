import React,{useState,useRef} from "react";
import Compo from "./servicecompo.jsx"
import './service.css'
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";

function Service(){
  const servRef=useRef(null)
  const [movx,setFad]=useState(false)

  const change=()=>{
    setFad(window.scrollY>=(servRef.current.offsetTop-(window.innerHeight/1.1))?true:false)
  };
  window.addEventListener('scroll',change);

  return(
    <div className='s' id='services'>
    <hr className='sh'/>
    <h2 className='af'><strong>Our</strong> Services</h2>
    <div className='ser'>
     <div className='row' ref={servRef}>
        <Compo
         link={c4}
         name="Architecture"
         className={movx?'fading':'f'}/>
         <Compo
          link={c3}
         name="Interior Design"
          className={movx?'fading1':'f'}/>
     </div>
    </div>
    </div>
  )
}
export default Service;
