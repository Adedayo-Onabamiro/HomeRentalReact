import React, { useState, useEffect, useRef } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


// gsap.registerPlugin(ScrollTrigger);

const NavbarA = () => {
  // code for animation starts
  useEffect(() => {
    Aos.init({
      // duration: 1000,
      // once: true,
      mirror: true,
    });
  }, []);
  // code for animation ends

  // code for navigation functionality and responsiveness starts
  // const timeline = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  useEffect(() => {  
      const handleScroll = () => {
        const menuHeight = document.querySelector(".nav-elements").offsetHeight;
        if (window.pageYOffset > menuHeight) {
          setShowNavbar(false);
        }
        else {
          // setShowNavbar (true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      // return () => {
      //   window.removeEventListener("scroll", handleScroll);
      // }
  }, []);
    // code for navigation functionality and responsiveness ends


  return (
    <nav data-aos="fade-down" data-aos-duration = "2000" data-aos-mirror="false"  className="navbar">
      <div className="NavbarContainer">
        <div className="logo">
        <img className="logo-img" src="../images/logo1.png" alt="Logo Image" />
        </div>
        <div className="hamburger" onClick={handleShowNavbar}> <div className="bar"></div> </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          <li className="landLi"><a href="#landing" data-after="Home">Home</a></li>
                    <li className="landLi"><a href="#LOP" data-after="LandLord">LandLord</a></li>
                    <li className="landLi"><a href="#Property" data-after="Tenants">Tenants</a></li>
                    <li className="landLi"><a href="#footer" data-after="Contact Us">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarA
