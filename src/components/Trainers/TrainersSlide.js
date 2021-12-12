import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrainersSlide.css";
import { trainersData } from "./trainersData";
import { RiLinkedinFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";

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
      <div className="trainers-slide-container">
         <Slider {...settings}>
            {trainersData.map(({ img, name, trains, socials }) => {
               return (
                  <div className="trainers-slide-wrapper">
                     <div className="img-container">
                        <img src={img} alt="...img" />
                        <div className="overlay">
                           <div className="social-media">
                              <a href={socials.facebook}>
                                 <RiFacebookFill />
                              </a>
                              <a href={socials.linkedin}>
                                 <RiLinkedinFill />
                              </a>
                              <a href={socials.twitter}>
                                 <RiTwitterFill />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="trainer-info">
                        <h1 className="title">{name}</h1>
                        <p className="text">{trains}</p>
                     </div>
                  </div>
               );
            })}
         </Slider>
      </div>
   );
};

export default TrainersSlide;
