import { NavLink } from "react-router-dom";
import './button.css';


export const Button =({
  buttonBtn,
  buttonBtntras,
  icon
})=>{
    return(
      <>
      <div className="btn buttonAll">
     <NavLink>{buttonBtn}</NavLink> 
    <i> {icon }</i>  

      </div>
      <div className="btn-trasp">
      <NavLink>{buttonBtntras}</NavLink> 
      </div>
      </>
    );
}