import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import '../css/Home.css';
import img1 from './bed.svg';
import img2 from './coach.svg';
import img3 from './closet.svg';
import img4 from './furniture.svg';
import img5 from './kitchen.svg';
import img6 from './pouf.svg';
import img7 from './table.jpg';
import img9 from './brand1.svg';
import img10 from './brand2.svg';
import img11 from './brand3.svg';
import img12 from './brand4.svg';
import img13 from './brand5.svg';
import img14 from './brand6.svg';
import img15 from './brand7.svg';
import img16 from './brand8.svg';
import img17 from './brand9.svg';
import img18 from './brand10.svg';
import img19 from './brand11.svg';
import img20 from './brand12.svg';
import img21 from './brand13.svg';
import img22 from './brand14.svg';
import img23 from './brand15.svg';
import img24 from './brand16.svg';
import img25 from './brand17.svg';
import img26 from './brand18.svg';
import img27 from './brand19.svg';
import img28 from './brand20.svg';
import img29 from './slide1.jpg';
import img30 from './slide2.jpg';
import img31 from './slide3.jpg';

function Slider(){
    return (
        <>
        <div>
        <Carousel>
               <Carousel.Item>
               <img className="d-block w-100" src={img29}
                           alt="First" style={{height:"70vh"}}
                       />
                   <Carousel.Caption>
                   
                   </Carousel.Caption>
               </Carousel.Item>
               {/* */}
               <Carousel.Item>
               <img className="d-block w-100" src={img30}
                           alt="Second" style={{height:"70vh"}}
                       />
                   <Carousel.Caption>
                   
                   </Carousel.Caption>
               </Carousel.Item>
               {/* */}
               <Carousel.Item>
               <img className="d-block w-100" src={img31}
                           alt="Third" style={{height:"70vh"}}
                       />
                   <Carousel.Caption>
                   
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        </div>
        <div class="my">
         <p>Explore Our Furniture Range</p> 
        </div>
        <div className="centerdiv">
            <a href="http://localhost:3000/product/#7"> <img className="myimg" src={img1} title="bed" alt="bed" style={{width:"50px",height:"50px" }}/></a>
            <a href="http://localhost:3000/product/#1"> <img className="myimg" src={img2} title="coach" alt="coach"  style={{width:"50px",height:"50px" }}/></a>
            <a href="http://localhost:3000/product/#13"> <img className="myimg" src={img3} title="closet" alt="closet" style={{width:"50px",height:"50px" }}/></a>
            <a href="http://localhost:3000/product/#19"> <img className="myimg" src={img4} title="furniture" alt="furniture" style={{width:"50px",height:"50px" }}/></a>
            <a href="http://localhost:3000/product/#25"> <img className="myimg" src={img5} title="Kitchen" alt="Kitchen" style={{width:"50px",height:"50px" }}/></a>
            <a href="http://localhost:3000/product/#28"> <img className="myimg" src={img6} title="pouf" alt="pouf" style={{width:"50px",height:"50px" }}/></a>
        </div>
        <div class="my">
         <p>Safety Assured</p> 
        </div>
        <div className="secured">
            <img src="https://www.ulcdn.net/media/collections/listing/Marketing-Module-safety.jpg?1595610322" alt="secured" style={{ width:"990px",height:"400px"}} />
        </div>
        <div className="discount">
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/web_regBanner_17_11_2020.jpg" alt="disc" style={{ widht:"1120px",height:"100px"}}/>
        </div>
        {/* Whats New */}
        <div className="let">
          <p className="ab">What's New</p>
          <table className="mytab">
              <tr>
                  <td>
          <p style={{color:"gray"}}>INTRODUCE</p>
          <h5>WORK FROM HOME, THE NEW NORMAL</h5><br/>
          <p style={{textAlign:"left"}}>WoodBazar offers an amazing work from home furniture collection.
      You will find sitable work desks, some of the best ergonomic chairs, 
      laptop tables, study tables to make a mini office in your home.
      So, which one are you looking at?</p> 
      <br/>
      <a className="button" href="http://localhost:3000/product">Explore</a>           
                  </td>
                  <td id="mytabim">
                      <img id="uniq" src={img7} alt="living area"/>
                  </td>
             </tr>
          </table>

</div>
{/* BRAND */}

<div className="client-wrap">
    <p>Popular Brands</p>
    <div className="client-in">
           <ul>
               <li> 
                <img src={img9} alt="brand1"/>
                <img src={img10} alt="brand2"/>
               </li>
               <li> 
                <img src={img11} alt="brand3"/>
                <img src={img12} alt="brand4"/>
               </li>
               <li> 
                <img src={img13} alt="brand5"/>
                <img src={img14} alt="brand6"/>
               </li>
               <li> 
                <img src={img15} alt="brand7"/>
                <img src={img16} alt="brand8"/>
               </li>
               <li> 
                <img src={img17} alt="brand9"/>
                <img src={img18} alt="brand10"/>
               </li>
               <li> 
                <img src={img19} alt="brand11"/>
                <img src={img20} alt="brand12"/>
               </li>
               <li> 
                <img src={img21} alt="brand13"/>
                <img src={img22} alt="brand14"/>
               </li> 
               <li> 
                <img src={img23} alt="brand15"/>
                <img src={img24} alt="brand16"/>
               </li> 
               <li> 
                <img src={img25} alt="brand17"/>
                <img src={img26} alt="brand18"/>
               </li> 
               <li> 
                <img src={img27} alt="brand19"/>
                <img src={img28} alt="brand20"/>
               </li>                 
           </ul>
    </div>
</div>
{/* Our services */}
<div className="services-section">
      <div className="inner-width">
      <div className="my">
         <p>Our services</p> 
        </div>
        <div className="services-container">

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <div className="service-title">Fast Delivery</div>
            <div className="service-desc">
            Consumer demand for fast delivery is less of an imperative for one-of-a-kind or hard-to-attain items. 
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
            <i className="fas fa-hand-holding-usd"></i>
            </div>
            <div className="service-title">Low Cost</div>
            <div className="service-desc">
            Buyers can save money. Lower prices for customers result in more sales volume and less competition.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
            <i className="fas fa-tags"></i>
            </div>
            <div className="service-title">Great Discounts</div>
            <div className="service-desc">
            Great Discounts all season, amazing offers and gifts for our amazing customers who trust our services.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
            <i className="fas fa-chair"></i>
            </div>
            <div className="service-title">Best Quality</div>
            <div className="service-desc">
            Because we belive in buy once buy good. A high-quality product shouldn't be complicated to use.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
            <i className="fas fa-headset"></i>
            </div>
            <div className="service-title">Customer Care</div>
            <div className="service-desc">
            24/7 customer service , Our customer care team will be always on duty for helping you.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
            <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="service-title">Easy Buy</div>
            <div className="service-desc">
             Our website provides you an easy interface so that you can buy your goods no matter where you are.
            </div>
          </div>
        </div>
      </div>
    </div>
{/* Footer */}
        </>
        
    )
}
               
export default Slider;