import Signupbar from "./Signupbar";
import Hero from "./SlideShow/Hero";
import React from "react";
import SlideShow from "./SlideShow/SlideShow";


import {home3,home2} from '../assets'

const DefaultPage = () => (
      <div>
            <div className="absolute ">
            <img src={home3} className="hidden md:block w-full h-full"/>
            <img src={home2} className="md:hidden  w-full h-full"/>

            </div>
      

      <div>
        
      </div>
      <div className=''>
            <div className=" absolute ">
      <Signupbar/>
      </div>
      
            <Hero />
            
            <SlideShow/>
            
           
           
            
      </div>

 </div>
     

    

);



export default  DefaultPage ;