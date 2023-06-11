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


// timeline.current = gsap.timeline({ defaults: { duration: 1 } });

// gsap.registerPlugin(ScrollTrigger);
// timeline.current.fromTo('.logo', {
//   x: '-50vh',
//   scrollTrigger:'.logo',
// }, {x:"+0vh"});
// timeline.current.fromTo('.nav-elements', {
//   y: "-100%",
//   opacity: 0,
//   stagger: .5,
//   ease: "bounce",
// },{
//   y: "0",
//   opacity: 100,
//   stagger:.7,
//   ease:"bounce"
// });
// timeline.current.fromTo('.Ibox1', {
//   x: '-100%',
//   opacity: 0,
//   scrollTrigger:'.Ibox1',
// }, {x: 0, opacity: 100});
// timeline.current.fromTo('.Ibox2', {
//   x: '25%',
//   duration: 1.4,
//   opacity: 0,
//   scrollTrigger:'.Ibox2',
// }, {x: 0, opacity: 100});
// timeline.current.fromTo('.grid-item', {
//   scale: 0.6,
//   y: 60,
//   yoyo: true,
//   ease: 'power1.inOut',
//   stagger: {
//     amount: 1.5,
//     grid: 'auto',
//     from: 'left',
//   },
//   scrollTrigger: {
//     trigger: '.MLC',
//     start: 'top 100%',
//     scrub: true
//   },
// },{scale: 1,y: 0,});
// timeline.current.fromTo('.imgBox1 img', {
//   scale: 0.5,
//   y: 60,
//   duration: 2,
//   yoyo: true,
//   ease: 'power1.inOut',
//   scrollTrigger: {
//     trigger: '.Flexibox2 h1', // Element that triggers the animation
//     start: 'top 100%',
//   },
//   stagger: {
//     amount: 1.5,
//     grid: 'auto',
//     from: 'left',
//   },
//   scrollTrigger:'.FlexiBtn',
// }, {scale:1, y:0, yoyo: true,
//   ease: 'power1.inOut',
//   stagger: {
//     amount: 1.5,
//     grid: 'auto',
//     from: 'left',
//   },}, 5);
// timeline.current.fromTo('.Box', {
//   scrollTrigger: '.Box',
//   x: -50,
//   yoyo: true,
//   ease: 'power1.inOut',
//   stagger: {
//     amount: 1.5,
//     grid: 'auto',
//     from: 'left',
//   },
// }, {x:0}, 2);