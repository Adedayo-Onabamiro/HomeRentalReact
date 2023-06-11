import React from 'react'
import { Pagination } from './Pagination'
import { LOPGridItem } from './LOPGridItem'

export const LOP = () => {
  return (
    <>
        <section data-aos="slide-up" data-aos-duration = "1800" className="LOP" id="LOP">
            <div className="LOPtopCont">
                <span className="MLCBT"><span style={{borderBottom: "2px solid red"}}>List</span> Of Properties</span>
                <button className="ViewPropertyBtn">View All Property</button>
            </div>

            <div className="LOPgrid-container">
                <LOPGridItem 
                    LOPImagesrc = "../images/unsplash_T6d96Qrb5MY.png"
                    LOPAddress = "1446 George Drive, san francisco, CA, 95210"
                    LOPPrice = "$1200"
                    LOPNo_of_bed = "4"
                    LOPNo_of_shower = "2"
                    LOPNo_of_window = "2"
                />       

                <LOPGridItem 
                    LOPImagesrc = "../images/unsplash_2d4lAQAlbDA.png"
                    LOPAddress = "2578 Frank Drive, san francisco, CA, 94110"
                    LOPPrice = "$4100"
                    LOPNo_of_bed = "5"
                    LOPNo_of_shower = "5"
                    LOPNo_of_window = "4"
                />    

                <LOPGridItem 
                    LOPImagesrc = "../images/unsplash_T6d96Qrb5MY.png"
                    LOPAddress = "10 Folsom street, san francisco, CA, 94108"
                    LOPPrice = "$1000"
                    LOPNo_of_bed = "3"
                    LOPNo_of_shower = "3"
                    LOPNo_of_window = "3"
                />    

                <LOPGridItem 
                    LOPImagesrc = "../images/unsplash_KQgrVfR3r74.png"
                    LOPAddress = "3012 Carragher street, san francisco, CA, 21110"
                    LOPPrice = "$1200"
                    LOPNo_of_bed = "4"
                    LOPNo_of_shower = "4"
                    LOPNo_of_window = "2"
                />    

                <LOPGridItem 
                    LOPImagesrc = "../images/unsplash_UV81E0oXXWQ.png"
                    LOPAddress = "2102 James Avenue, san francisco, CA, 34110"
                    LOPPrice = "$1900"
                    LOPNo_of_bed = "5"
                    LOPNo_of_shower = "7"
                    LOPNo_of_window = "2"
                />    

                <LOPGridItem 
                    LOPImagesrc = "../images/unsplash_uDtC-1NLEzU.png"
                    LOPAddress = "635 Heaven street, san francisco, CA, 4421"
                    LOPPrice = "$1700"
                    LOPNo_of_bed = "4"
                    LOPNo_of_shower = "4"
                    LOPNo_of_window = "3"
                />                 
            </div>

            <Pagination />
        </section>
    </>
  )
}


