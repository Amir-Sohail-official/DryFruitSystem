import React from "react";
import logo from "../images/logu.png";
import  "./nevbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Nevbar() {
  return (
    <>
      <div className="main_div">
        <div className="logu_div">
         <div className="logu"><img src={logo} alt=""  height="120px" width="100px" /></div> 
        </div>
        <div className="text_div">
          <div className="link_dev">
          <Link to="/" className="link">Home</Link>
            
            </div>
          <div>
          <Link to="/upload" className="link">Upload</Link>
            </div>
          <div>
          <Link to="/seasonal-alert" className="link">Seasonal Alert</Link>
            </div>
          <div>
          <Link to="/feedback" className="link">Feedback</Link>
            
            </div>
          <div>
          <Link to="/contact" className="link">Contact Us</Link>
            </div>
          <div>
          <Link to="/about" className="link">About Us</Link>
            </div>
            <div>
          <Link to="/login" className="link">LogIn</Link>
            </div>
            <div>
          <Link to="/signup" className="link">signUp</Link>
            </div>
        </div>

        <div className="search_div">
        <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="search" placeholder="Search Here" /> </div>
        </div>

      </div>
    </>
  );
}
