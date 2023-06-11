import React from 'react'

export const GridItem = (props) => {
    var imagesrc = props.imagesrc
    var text = props.text
  return (
    <>
        <div data-aos="zoom-in" data-aos-duration = "1800" className="grid-item">
            <div className="itemContent">
                <div className="iconBox">
                    <img src={imagesrc} />
                </div>
                <div className="textBox">
                    <p> {text} </p>
                </div>
            </div>
        </div>
    </>
  )
}
