import React from "react";
import Project from "./project";
import p1 from '../images/9.PNG'
import p2 from '../images/k3.PNG'
import p3 from '../images/11.PNG'
import p4 from '../images/k6.PNG'
import './project.css'

function Projects(){
  return(
    <div className='p container'>
    <hr className='sh'/>
     <h2 className='af'>Our <strong>Projects</strong></h2>
     <div className='container'>
      <div className='row'>
       <Project link={p1} alt="" text=''/>
       <Project link={p2} alt="" text=''/>
       <Project link={p3} alt="" text=''/>
       <Project link={p4} alt="" text=''/>
      </div>
     </div>
    </div>
  )
}

export default Projects
