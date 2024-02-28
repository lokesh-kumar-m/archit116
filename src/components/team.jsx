import React from "react";
import Card from "./teamcard"
import t1 from '../images/team-1.jpg'
import t2 from '../images/team-2.jpg'
import t3 from '../images/team-3.jpg'
import './team.css'

function Team(){
  return(
    <div className='container ttm'>
    <hr className='sh'/>
    <h2 className='af yck'><strong>Our</strong> Team</h2>
    <div className='row'>
    <Card link={t1} alt='' text='jknafef' />
    <Card link={t2} alt='' text='ikhnrf' />
    <Card link={t3} alt='' text='this and that' />
    </div>
    </div>
  )
}
export default Team;
