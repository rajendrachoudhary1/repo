// If App.css is in the root /src folder
import '../../App.css';

import React from 'react'
import img2 from "../../Img/brand1.jpg"
import img3 from "../../Img/brand2.jpg"
import img4 from "../../Img/brand3.jpg"

function Ourprocess(){
    return(
        <>
        <section >
            <h3 className='ourpartner'>Our partner</h3>
            

            <p className='underline2'></p>
            <div className='partner'>
                <div className='part'>

                <img src={img2}></img>
               <h3>Brand name</h3>
                </div>
               <p className='underline2'></p>
            </div>
            <div className='partner'>
                <div className='part'>

                <img src={img3}></img>
               <h3>Brand name</h3>
                </div>
               <p className='underline2'></p>
            </div>
            <div className='partner'>
                <div className='part'>

                <img src={img4}></img>
               <h3>Brand name</h3>
                </div>
               <p className='underline2'></p>
            </div>
             
             
        </section>
        </>
    )
}
export default Ourprocess;