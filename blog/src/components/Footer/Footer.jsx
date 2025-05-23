import { NavLink } from "react-router-dom";
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";

export const Footer=()=>{
    return(
        <>
        <footer className="section">
        <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="uselink">
                    <h4 className="text-capitalize mb-4">Company</h4>
                    <ul>
                        <li><NavLink>Terms & Conditions</NavLink></li>
                        <li><NavLink>Privacy Policy</NavLink></li>
                        <li><NavLink>Support</NavLink></li>
                        <li><NavLink>FAQ</NavLink></li>
                    </ul>
               
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="uselink">
                    <h4 className="text-capitalize mb-4">Quick Links</h4>
                    <ul>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Services</NavLink></li>
                        <li><NavLink>Team</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                    </ul>
               
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="uselink">
                    <h4 className="text-capitalize mb-4">Subscribe Us</h4>
                    <p>Subscribe to get latest news article and resources  </p>
                 <form action="" className="sub-form">
                    <input type="text" className="form-control mb-3" placeholder="Subscribe Now ..." />
                    <NavLink>subscribe</NavLink>
                 </form>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="uselink ">
                <NavLink className="navbar-brand mb-4" to="/">
        Mega<span>kit.</span>

        </NavLink>
                    <p><NavLink>support@gmail.com</NavLink></p>
                   <span><NavLink>+23-456-6588</NavLink></span>
                </div>
            </div>
        </div>
        <hr />
        <div className="row" id="copyright">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="copyright">
                © Copyright Reserved to <span>Megakit.</span> by
                
                <NavLink> Themefisher</NavLink>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="copyright">
                Distributed by 
                <NavLink> Themefisher</NavLink>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
               <ul class="list-inline footer-socials">
                <li className="list-inline-item">
                   <NavLink>  <FaFacebookF/> Facebook</NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink> <LuTwitter/> Twitter</NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink> <FaLinkedinIn/> Linkedin</NavLink>
                </li>
               </ul>
            </div>
        </div>
       </div>
   
        </footer>
  
        </>
    );
} 