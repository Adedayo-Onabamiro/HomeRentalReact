import React from 'react'
// import { gsap } from 'gsap';

export const LOPGridItem = (props) => {

    const LOPImagesrc = props.LOPImagesrc
    const LOPAddress = props.LOPAddress
    const LOPPrice = props.LOPPrice
    const LOPNo_of_bed = props.LOPNo_of_bed
    const LOPNo_of_shower = props.LOPNo_of_shower
    const LOPNo_of_window = props.LOPNo_of_window

  return (
    <>
        <div className="LOPgrid-item">
            <div className="card">
                <img src= {LOPImagesrc} />
                <div className="cardContentBox">
                <h4><b> {LOPAddress} </b></h4> 
                <p>Private Room</p> 
                <h4 style={{color: "#F4511E", fontSize: 25}}><b> {LOPPrice} </b></h4> 
                </div>
                <div className="featureBox">
                <div className="Fbox1">
                    <img src= "../images/Bed.png" />
                    <span> {LOPNo_of_bed} </span>
                </div>
                <div className="Fbox2">
                    <img src= "../images/Shower.png" />
                    <span> {LOPNo_of_shower} </span>
                </div>
                <div className="Fbox3">
                    <img src= "../images/Size.png" />
                    <span> {LOPNo_of_window} </span>
                </div>
                </div>
            </div>
        </div>   
    </>
  )
}
