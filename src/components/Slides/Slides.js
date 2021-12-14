import { useState } from "react";
import Slider from "react-slick";
import "./Slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion/dist/es/index";

const Slides = () => {
   const [afterAll, setAfterAll] = useState(0);
   const [beforeAll, setBeforeAll] = useState(0);

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
      beforeChange: (state) => setBeforeAll(state),
      afterChange: (state) => setAfterAll(state),
   };
   const titleVariant1 = {
      initial: {
         opacity: 0,
         visibility: "hidden",
         translateX: "-200px",
      },
      animate: {
         opacity: 1,
         visibility: "visible",
         translateX: "0px",
         transition: {
            ease: "linear",
            delay: 0.1,
            duration: 0.8,
         },
      },
   };

   const detailsVariant1 = {
      initial: {
         opacity: 0,
         visibility: "hidden",
         translateX: "-200px",
      },
      animate: {
         opacity: 1,
         visibility: "visible",
         translateX: "0px",
         transition: {
            ease: "linear",
            delay: 0.5,
            duration: 0.8,
         },
      },
   };

   const buttonVariant1 = {
      initial: {
         opacity: 0,
         visibility: "hidden",
         translateX: "-200px",
      },
      animate: {
         opacity: 1,
         visibility: "visible",
         translateX: "0px",
         transition: {
            ease: "linear",
            delay: 0.7,
            duration: 0.8,
         },
      },
   };

   return (
      <Slider {...settings}>
         <div className="slide-wrapper">
            <div className="slide-1">
               <div className="slides-content">
                  <motion.h1
                     variants={titleVariant1}
                     initial="initial"
                     animate={afterAll === 0 ? "animate" : "initial"}
                  >
                     Build <span>your</span> body <span>strong</span>
                  </motion.h1>
                  <motion.p
                     variants={detailsVariant1}
                     initial="initial"
                     animate={afterAll === 0 ? "animate" : "initial"}
                  >
                     Ready to make changes in your life?
                  </motion.p>
                  <motion.div
                     className="join-now"
                     variants={buttonVariant1}
                     initial="initial"
                     animate={afterAll === 0 ? "animate" : "initial"}
                  >
                     <a href="##">Join Now</a>
                  </motion.div>
               </div>
            </div>
            <div className="slides-overlay"></div>
         </div>
         <div className="slide-wrapper">
            <div className="slide-2">
               <div className="slides-content">
                  <motion.h1
                     variants={titleVariant1}
                     initial="initial"
                     animate={afterAll === 1 ? "animate" : "initial"}
                  >
                     Build <span>your</span> body <span>strong</span>
                  </motion.h1>
                  <motion.p
                     variants={detailsVariant1}
                     initial="initial"
                     animate={afterAll === 1 ? "animate" : "initial"}
                  >
                     Ready to make changes in your life?
                  </motion.p>
                  <motion.div
                     className="join-now"
                     variants={buttonVariant1}
                     initial="initial"
                     animate={afterAll === 1 ? "animate" : "initial"}
                  >
                     <a href="##">Join Now</a>
                  </motion.div>
               </div>
            </div>
            <div className="slides-overlay"></div>
         </div>
         <div className="slide-wrapper">
            <div className="slide-3">
               <div className="slides-content">
                  <motion.h1
                     variants={titleVariant1}
                     initial="initial"
                     animate={afterAll === 2 ? "animate" : "initial"}
                  >
                     Build <span>your</span> body <span>strong</span>
                  </motion.h1>
                  <motion.p
                     variants={detailsVariant1}
                     initial="initial"
                     animate={afterAll === 2 ? "animate" : "initial"}
                  >
                     Ready to make changes in your life?
                  </motion.p>
                  <motion.div
                     className="join-now"
                     variants={buttonVariant1}
                     initial="initial"
                     animate={afterAll === 2 ? "animate" : "initial"}
                  >
                     <a href="##">Join Now</a>
                  </motion.div>
               </div>
            </div>
            <div className="slides-overlay"></div>
         </div>
      </Slider>
   );
};

export default Slides;
