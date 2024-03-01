import React , { useState } from 'react'
import {Logo , Hindi, Down} from "../assets/assets";
import "../Styles/Navbar.css";
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {




  return (
    <nav>
        <div className="nav">
            <div className="Logo"> 
              <img src={Logo} width="50px" alt="" />
            </div>
            <div className='un-logo-address' >
                <div className="un-logo">
                  <img src={Hindi} width="160px" alt="" />
                </div>
                <div className="un-full-name">
                  <p> South Civil Lines, Pachpedi, Lekha Nagar, Jabalpur, Madhya Pradesh 482001</p>
                </div>
            </div>
            <div className="Logo"> 
              <img src={Logo} width="50px" alt="" />
            </div>
        </div>
        <div className="menu-links">
          <div className='Link' >
            <NavLink to="/" > Home </NavLink>
          </div>
          <div className='Link dropdown'  >
          
            <NavLink to="/About"  > About </NavLink>
            <img src={ Down } width="12px" alt="down" />
            <div className='Dropdwon-lists'  >
              <ul>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
              </ul>
            </div>
          </div>
          <div className='Link dropdown'  >
            <NavLink to="/Academics" > Academics </NavLink>
            <img src={ Down } width="12px" alt="down" />
            <div className='Dropdwon-lists'  >
              <ul>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
              </ul>
            </div>
          </div>
          <div className='Link dropdown'  >
            <NavLink to="/Admission" > Admission 2024 </NavLink>
            <img src={ Down } width="12px" alt="down" />
            <div className='Dropdwon-lists'  >
              <ul>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
              </ul>
            </div>
          </div>
          <div className='Link dropdown'  >
            <NavLink to="/Faculty" > Faculty And Staff </NavLink>
            <img src={ Down } width="12px" alt="down" />
            <div className='Dropdwon-lists'  >
              <ul>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
              </ul>
            </div>
          </div>
          <div className='Link dropdown'  >
            <NavLink to="/Campus" > Campus </NavLink>
            <img src={ Down } width="12px" alt="down" />
            <div className='Dropdwon-lists'  >
              <ul>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
              </ul>
            </div>
          </div>
          <div className='Link dropdown'  >
            <NavLink to="/Library"  > Library </NavLink>
            <img src={ Down } width="12px" alt="down" />
            <div className='Dropdwon-lists'  >
              <ul>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
              </ul>
            </div>
          </div>

          <div className='Link dropdown'  >
            <NavLink to="/News"  > News and Events </NavLink>
            <img src={ Down } width="12px" alt="down" />
            <div className='Dropdwon-lists'  >
              <ul>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
              </ul>
            </div>
          </div>
          <div className='Link dropdown'  >
            <NavLink to="/Students"  > Students </NavLink>
            <img src={ Down } width="12px" alt="down" />
            <div className='Dropdwon-lists'  >
              <ul>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
                <li> About DNLU </li>
                <li> Covering Bodies </li>
                <li> Visitors </li>
              </ul>
            </div>
          </div>

          <div className='Link dropdown'  >
            <NavLink to="/About"  > Contact Us </NavLink>

          </div>

        </div>
    
    </nav>
  )
}

export default Navbar;



