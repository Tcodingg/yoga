import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slides.css";
const Slides = () => {
   const [afterAll, setAfterAll] = useState(0);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      className: "react-slick-parent",
      dotsClass: "dotsClass",
      afterChange: (state) => setAfterAll(state),
   };
   useEffect(() => {
      console.log(afterAll);
   }, [afterAll]);

   console.log(afterAll);
   return (
      <Slider {...settings}>
         <div className="slide-wrapper">
            <div className="slide-1"></div>
         </div>
         <div className="slide-wrapper">
            <div className="slide-2"></div>
         </div>
         <div className="slide-wrapper">
            <div className="slide-3"></div>
         </div>
      </Slider>
   );
};

export default Slides;
