import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrainersSlide.css";
import { trainersData } from "./trainersData";

const TrainersSlide = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      className: "trainers-slide",
      //   dotsClass: "dotsClass",
   };
   return (
      <Slider {...settings}>
         {trainersData.map(({ img, name, trains }) => {
            return (
               <div className="trainers-slide-wrapper">
                  <div className="img-container">
                     <img src={img} alt="...img" />
                  </div>
                  <div className="trainer-info">
                     <h1 className="title">{name}</h1>
                     <p className="text">{trains}</p>
                  </div>
               </div>
            );
         })}
      </Slider>
   );
};

export default TrainersSlide;
