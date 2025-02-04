 
import '../../App.css';
import img from '../../Img/Frame 177.png'
import img1 from '../../Img/Frame 178.png'
import img2 from '../../Img/Frame 165.png'
import React from 'react';

 
 
function Footer(){
     return(
        <> 
        <footer className='footer'>
            <div className='footermain'>
               <div className='footerlogo'>
                  <p>LOGO</p>
                  <div className='footericon'>
                  <img src={img}></img>
                  <img src={img1}></img>
                  <img src={img2}></img>
                  </div>
                  
               </div>
               <div className='footerdetails'>
                   <h4>Pages</h4>
                   <p className='underline'></p>
                   <ul>
                     <li><a href='#home'>Home</a></li>
                     <li> <a href='#Aboutus'>About us</a></li>
                     <li><a href='#Resources'>Resources</a></li>
                   </ul>
                   
                   <h4>Address</h4>
                   <p className='underline'></p>

                   <div className='footer-address'> 
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                   </div>
               </div>
            </div>
        </footer>  
        </>
     )   
}
export default Footer
