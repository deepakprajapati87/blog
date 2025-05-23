import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './CounterUp.css';
export const CounterUp=(
   {
    start,
    end,
    iconPlus,
    project,
    icon
    
   }
)=>{
    const [counterStart, setCounterStart]= useState(false);
    return(
        <>
        <ScrollTrigger onEnter={()=>setCounterStart(true)} onExit={()=>setCounterStart(false)}>
            {counterStart &&  <div className="counterUp">
           <div className="iconcounter">
           <span>{icon}</span>
           </div>
           
     <h3><CountUp start={start} end={end} duration={2} delay={0}  /> <span  style={{fontSize:'30px', fontWeight:'bold'}}>{iconPlus}</span> </h3>  
     <p>{project}</p> 
      </div>}
       
        </ScrollTrigger>
     
        </>
    );
}