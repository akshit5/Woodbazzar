import React from 'react';
import img1 from './envelope-solid.svg';
import '../css/contact.css';
function Contact(){
    return (
       <>
        <div className="container">
             <form action="">
                 <h1>Contact Us</h1>
                 <hr/>
                 <p>If, any query please enter your Email. Our team will contact you as soon as possible. Also
                    Get all notifications regarding offers, Discount, new arrivals, awesome sales and much more.
                    Enter your mail , click the button and there you go!.</p>
                  <div className="email-box">
                     <img src={img1} alt="email"/>
                     <input className="tbox" type="text" name="button" placeholder="Enter your email"/>
                     <button className="btn" type="button" name="button">Contact</button>
                  </div>  
             </form>
        </div>
       </>
    );
}
export default Contact;