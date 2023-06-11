import React, { useRef } from 'react'
import "../index.css"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faSearch} from '@fortawesome/free-solid-svg-icons'


export const IntroBox = () => {
  const m01Ref = useRef(null);
  const [m01isToggled, setm01IsToggled] = useState(false);
  
  const m01handleClick = () => {
    const mO1Dropdown = m01Ref.current;
    if (mO1Dropdown) {
      mO1Dropdown.classList.toggle("active");
      setm01IsToggled(!m01isToggled);
    }
  };

  const m02Ref = useRef(null);
  const [m02isToggled, setm02IsToggled] = useState(false);
  const m02handleClick = () => {
    const mO2Dropdown = m02Ref.current;
    if (mO2Dropdown) {
      mO2Dropdown.classList.toggle("active");
      setm02IsToggled(!m02isToggled);
    }
  
  };


  return (
    <div className='introBox'>
          <div data-aos="fade-right" data-aos-duration = "2500" className="Ibox1">
            <p>
              The most affordable
              place to stay in the
              san franciso bay area
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration = "2500" className="Ibox2">
            <div className="mapDiv">
              <img src="../images/c6472c41b4a12ea91fbfdf1b29d21a18.jfif" />
            </div>
            <div className="mapOptions">
              <div className="mO1">
                <div className="dropdown">
                  <button onClick={m01handleClick}>Houses 
                    <FontAwesomeIcon icon= {faCaretDown} />
                  </button>
                  <ul ref={m01Ref}>
                    <li><a href="#">Duplex</a></li>
                    <li><a href="#">Bungalows</a></li>
                    <li><a href="#">Detached</a></li>
                  </ul>
                </div>
              </div>
              <div className="mO2">
                <div className="dropdown">
                  <button onClick={m02handleClick}>Neigborhood 
                  <FontAwesomeIcon icon= {faCaretDown} />
                  </button>
                  <ul ref={m02Ref}>
                    <li><a href="#">City</a></li>
                    <li><a href="#">Suburb</a></li>
                    <li><a href="#">Urban</a></li>
                  </ul>
                </div>
              </div>
              <div className="mO3">
                <div className="dropdown">
                  <button style={{backgroundColor: "skyblue", type:"button"}} >
                    <FontAwesomeIcon icon={faSearch} style={{color: "white", fontSize: "1.2rem"}}></FontAwesomeIcon>
                  </button>
                </div>
              </div>

            </div>
          </div>
    </div>
  )
}
