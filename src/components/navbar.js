import React from "react";
import "./navbar.css";
import icon from './Logokuliner.png'

const Navbar = () => {
  return (
    <nav>
      <img src={icon}/>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Contact </a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
