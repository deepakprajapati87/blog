import { NavLink } from "react-router-dom";
import './button2.css';


export const Button2 =({
  
  buttonBtntras
  
})=>{
    return(
      <>
    
      <div className="btn-trasp">
      <NavLink>{buttonBtntras}</NavLink> 
      </div>
      </>
    );
}