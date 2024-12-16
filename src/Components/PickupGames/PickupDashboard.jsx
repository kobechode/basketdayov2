import './Pickup.css';

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PickupDashboard = () =>{

   
  

   
  
  
  
   
    
  
  
  return(

    
      
  
  <div className="PickupDashboard">

 <div className="container">



<div class="projects__wrapper ">

<div class="pr1 ">

  <img class="w-[450px] h-[350px] "src="https://github.com/kobechode/CCT2/blob/master/WSBC2.png?raw=true" alt=""></img>
<p>WSBC BALLERS</p>
 <div class="desc1">
<p>This is a pickup basketball game that takes place on Monday, Tuesday, Wednesday, Friday, and Saturday from 6:00 PM to 9:00 PM at Glenwood Park Subdivision. Players of all skill levels are welcome to join and enjoy a friendly yet competitive basketball environment. Please note that registration is required, and slots are limited to ensure a fair and organized game. Make sure to arrive on time and bring the necessary gear to participate.</p>
 </div>
 
 <Link to="/wsbcreg">Join now</Link>
</div>


<div class="pr2">

  <img class="w-[450px] h-[350px] " src="https://github.com/kobechode/CCT2/blob/master/WCBA.png?raw=true" alt=""></img>
<p>WCBA BALLERS</p>

<div class="desc2">
  <p>This is a pickup basketball game that takes every Wednesday from 9:00 PM to 12:00 PM at Glenwood Park Subdivision. Players of all skill levels are welcome to join and enjoy a friendly yet competitive basketball environment. Please note that registration is required, and slots are limited to ensure a fair and organized game. Make sure to arrive on time and bring the necessary gear to participate.</p>
 

</div>

<Link to="/wcbareg">Join now</Link>
</div>

<div class="pr3">

  <img class="w-[850px] h-[650px]"  src="https://github.com/kobechode/CCT2/blob/master/Teachers_Club.png?raw=true" alt=""></img>
<p>Teachers Club</p>
<div class="desc">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

</div>
<Link to="/teachersreg">Join now</Link>
</div>


<div class="pr4">

  <img class="w-[550px] h-[450px]"  src="https://github.com/kobechode/CCT2/blob/master/Ayala.png?raw=true" alt=""></img>
<p>Ayala Ballers</p>
<div class="desc4">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

</div>
<Link to="/ayalareg">Join now</Link>
</div>



 



 
</div>


</div>






  </div>
   
 
  
  
  )
  }
  
  export default PickupDashboard