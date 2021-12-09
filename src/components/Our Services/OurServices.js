import "./OurServices.css";

import { GiMeditation } from "react-icons/gi";
const OurServices = () => {
   return (
      <section className="our-services bd-container">
         <div className="section"></div>
         <h3 className="sub-title">What We Do</h3>
         <h1 className="title">Our Services</h1>
         <div className="services flex">
            <div className="list-services">
               <div>
                  <div className="icon-wrapper">
                     <GiMeditation />
                  </div>
                  <div>
                     <div className="sub-title">Yoga</div>
                     <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Expedita, culpa delectus quibusdam quasi atque
                        libero. Ab eius est assumenda ad.
                     </p>
                  </div>
               </div>
            </div>
            <img src="" alt="image" />
         </div>
      </section>
   );
};

export default OurServices;
