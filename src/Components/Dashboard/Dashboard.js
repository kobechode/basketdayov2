 
import './Dashboard.css';
import { useState } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import { Link } from "react-router-dom";






export default function DashboardJs(){
    const  slides = [


            

        {url:'https://github.com/kobechode/CCT2/blob/master/Basketball-court.jpg?raw=true'},
        {url:'https://github.com/kobechode/CCT2/blob/master/Coach%202.jpg?raw=true'},
        {url:'https://github.com/kobechode/CCT2/blob/master/Venue.jpg?raw=true'},


    ];

    const [currentIndex,setCurrentIndex] = useState(0)
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);

    }
    const nextSlide = () => {

       const isLastSlide = currentIndex === slides.length - 1;
       const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
       setCurrentIndex(newIndex);

    }

   
 

    return  (
      
        <div className='Dashboard'>

 

{/* <div class="my-slider max-w-[2400px] h-[780px] m-auto py-16 px-4 relative flex  ">

<div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='slider-content' ></div>                    
  

    <div className='arrow-left  absolute top-[50%] -translate-x-0  translate-y-[-50%] left-5 text-5xl rounded-full p-2  cursor-pointer '>

          <BsChevronCompactLeft onClick={prevSlide} size={35} />

    </div>

    <div className='arrow-right absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-5xl rounded-full p-2  cursor-pointer '>

    <BsChevronCompactRight onClick={nextSlide} size={35} />


    </div>

 </div> */}
          
<div class="my-slider flex gap-12   ">

                     
                    <div class="Img1">
                    <Link to="/PickupDash">

                        <img class="w-[350px] h-[250px]" src="https://github.com/kobechode/CCT2/blob/master/Basketball-court.jpg?raw=true" alt=""></img>
                        <div className='card-content'>
                        <h1 className=''>Pickup Games</h1>
                        </div>
                        </Link>

                       
                        

                    </div>

                    <div className='Img2'>
                        <img class="w-[350px] h-[250px]" src="https://github.com/kobechode/CCT2/blob/master/Coach%202.jpg?raw=true" alt=""></img>
                        
                        <div className='card-content'>      
                        <h1>Coaching Session</h1>
                       
                        </div>
                        
                    </div>

                    <div className='Img3'>
                        <img class="w-[350px] h-[250px]" src="https://github.com/kobechode/CCT2/blob/master/Venue.jpg?raw=true" alt=""></img>
                     
                         <div className='card-content'>      
                        <h1>Venue Reservation</h1>
                     
                        </div>



                    </div>

                </div> 
      </div>
    )
}