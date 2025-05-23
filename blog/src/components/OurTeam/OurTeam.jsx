import React from "react";
import "./OurTeam.css"; // Custom CSS for overlay effect
import { NavLink } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const ImageCard = ({ title, image, dec }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="team-item position-relative">
        <img src={image} class="img-fluid w-100" alt={title} />
        <div className="team-img-hover">
          <ul className="team-social list-inline">
            <li className="list-inline-item">
                <NavLink className="facebook"> <FaFacebookF/>  </NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="twitter"> <FaTwitter/>  </NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="instagram"> <FaInstagram/>  </NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="linkedin"> <FaLinkedinIn/>  </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="team-item-content">
        <h4 className="mt-3 mb-0 text-capitalize">{title}</h4>
        <p>{dec}</p>
      </div>
    </div>
  );
};


