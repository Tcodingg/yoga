import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slides.css";
const Slides = () => {
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
   };
   return (
      <div className="">
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
      </div>
   );
};

export default Slides;
