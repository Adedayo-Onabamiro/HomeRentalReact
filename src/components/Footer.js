import React from 'react'

export const Footer = () => {
  return (
    <>
        <section className="footer" id="footer">
            <div className="fbox1"> 
                {/* <h1 style="font-size:55px;">Logo</h1>  */}
                <div className="flogoBox">
                <img src="../images/logo1.png" />
                </div>
            </div>
                <div className="fbox2">
                    <span>
                    <img src="../images/Shape.png" />
                    345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                    </span>

                    <span>
                    <img src="../images/Path.png" />
                    (123) 456-7890

                    <span>
                        <img src="../images/Shape (1).png" />
                        (123) 456-7890
                    </span>
                    </span>

                    <span className="fbox2SMImgs">
                    Social Media
                    <img src="../images/Facebook.png" />
                    <img src="../images/Twitter.png" />
                    <img src="../images/LinkedIn.png" />
                    <img src="../images/Youtube.png" />
                    <img src="../images/Instagram.png" />
                    <img src="../images/GooglePlus.png" />
                    <img src="../images/Pinterest.png" />
                    <img src="../images/RSS.png" />
                    </span>
                </div>
            </section>

            <section className="Bottom">
                <ul className="BNavUL">
                    <li className="BNavLi"><a href="#footer"> ABOUT US  </a></li>
                    <li className="BNavLi"><a href="#footer"> CONTACT US </a> </li>
                    <li className="BNavLi"><a  href="#footer">HELP</a> </li>
                    <li className="BNavLi"><a href="#footer">PRIVACY POLICY</a> </li>
                    <li className="BNavLi"><a href="#footer">DISCLAIMER</a> </li>
                </ul>

                <span>
                Copyright © 2020 DayoBamiro. All rights reserved
                </span>
                
            </section>
    </>
  )
}
