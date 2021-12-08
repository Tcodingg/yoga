import Slider from "react-slick";
import yoga1 from "../../images/yoga1.jpg";
import yoga2 from "../../images/yoga2.jpg";
import yoga3 from "../../images/yoga3.jpg";
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
      className: "react__slick__slider__parent dotsClass",
   };
   return (
      <div className="">
         <Slider {...settings}>
            <div className="slide">
               <img src={yoga1} alt="" />
            </div>
            <div className="slide">
               <img src={yoga2} alt="" />
            </div>
            <div className="slide">
               <img src={yoga3} alt="" />
            </div>
         </Slider>
      </div>
   );
};

export default Slides;
