import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import './TopHeader.css';
import { NavLink } from "react-bootstrap";
export const TopHeader=()=>{
    return(
       <section className="top-bar">
        <div className="container">
         <div className="row">
            <div className="col-md-12">
                <div className="top-text">
                <div className="scoial-media">
         <NavLink> <FaFacebookF/></NavLink> 
         <NavLink><FaTwitter/></NavLink>
        <NavLink><FaGithubAlt/></NavLink>
               
               </div>
               <div className="contact-top">
                <NavLink> <MdAddCall/> +91-973420452</NavLink>
                 <NavLink> <MdEmail /> support@gmail.com </NavLink>
                
               </div>
                </div>
              
            </div>
         </div>
        </div>
       </section>
    );
}