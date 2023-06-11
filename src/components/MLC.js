// MLC refers to the Minimum Living Cost section of the page
import React from 'react'
import { GridItem } from './GridItem.js'



export const MLC = () => {
  return (
    <>
     <section className="MLC" id="MLC">
      <p className="MLCBT"><span>Minimum Living Cost</span> Takes Care Of Everything</p>
      <div className="MLCContentBox">
        <div className="MLCbox1">
          <img data-aos="flip-left" data-aos-duration = "1500" className="MLCbox1Img" src="../images/unsplash_oGmf8o53LeE.png" />
        </div>
        <div className="MLCbox2">
          <div className="grid-container">
            <GridItem imagesrc = "../images/Vector.png" text = {<>Pay as Little <br/> as possible!</>} />
            <GridItem imagesrc = "../images/Vector (1).png" text = {<>Enjoy wisdom <br/> of community!</>}  />
            <GridItem imagesrc = "../images/Vector (2).png" text = {<>Let's somebody else <br/> take care of Landlord!</>} />
            <GridItem imagesrc = "../images/Vector (3).png" text = {<>Enjoy peaceful <br/> Environment!</>} />
            <GridItem imagesrc = "../images/Vector (4).png" text = {<>Stay Safe! <br/> Save Money</>} />
            <GridItem imagesrc = "../images/Vector (5).png" text = {<>Pay for what <br/> you use !</>}/>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
