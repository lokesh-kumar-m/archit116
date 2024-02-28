import React from 'react';
import './contact.css'
import Image from './cntct'
import Inpt from "./input.jsx"

function Contact(){
  return(
    <div className='container cx'>
     <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
       <div className='card cc'>
       <Image className='i'/>
       </div>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
       <div className='card qxc'>
        <div>
        <hr className='sh hr'/>
         <h2 className='af'>Contact <strong>Us</strong></h2>
         <form action='/send' method='post' className='lastfrm'>
           <Inpt
           lab=' Name'
           type='text'
           name='uname'
           place='Enter your Name'
            />
           <Inpt
           lab='Mail-id'
           type='email'
           name='umail'
           place='Enter your E-mail id'
            />
           <div className="form-group mx-sm-3 mb-2">
             <label >Message</label>
             <textarea className='form-control' rows='2' name="textarea" placeholder='Write to us'></textarea>
           </div>
           <div className="container button">
             <button className='btns' name="button">Submit</button>
           </div>
         </form>
        </div>
       </div>
      </div>
     </div>
    </div>
  )
}
export default Contact;
