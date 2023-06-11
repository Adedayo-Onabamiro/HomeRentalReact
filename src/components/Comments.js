import React from 'react'
import { Slideshow } from './SlideshowJScode'
export const Comments = () => {

  const slides = [
    {
      image:"../images/Ellipse 4.png",
      name: "Scott Demarcus",
      title: "LandLord",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiaminterdum nisl et nunc facilisis, a commodo eros mollis. Nunc velpellentesque est. Curabitur at ",
    },
    {
      image:"../images/Ellipse 14.png",
      name: "Funso Adeleke",
      title: "Decor Director",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiaminterdum nisl et nunc facilisis, a commodo eros mollis. Nunc velpellentesque est. Curabitur at odio sit amet libero vulputate efficiturac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretiumac, mattis eu velit. Donec sed risus a lacus fringilla finibus",
    },
    {
      image:"../images/Ellipse 15.png",
      name: "Brian Kowalski",
      title: "Tenant",
      text: " Nunc velpellentesque est. Curabitur at odio sit amet libero vulputate efficiturac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretiumac, mattis eu velit. Donec sed risus a lacus fringilla finibus, lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  
  // Render the Slideshow component
  <Slideshow slides={slides} />;
  


  return (
    <>
        <section className="Comments">
            <div className="Cbox1">
                <Slideshow slides= {slides}></Slideshow>
            </div>
            <div className="Cbox2">
                <a href="https://youtube.com/shorts/c262LigUSmw?feature=share"><img data-aos="fade-down" data-aos-offset="0" src="../images/content-card-item-8.png" /></a>
            </div>
    </section>
    </>
  )
}




