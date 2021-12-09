import "./OurServices.css";
import { services } from "./services";

import { GiMeditation } from "react-icons/gi";

const OurServices = () => {
   return (
      <section className="our-services bd-container">
         <div className="section"></div>
         <h3 className="sub-title">What We Do</h3>
         <h1 className="title">Our Services</h1>
         <div className="services flex">
            <div className="list-services">
               {services.map(({ icon, title, details }) => {
                  return (
                     <div className="service">
                        <div className="icon-wrapper">{icon}</div>
                        <div className="service-details">
                           <div className="sub-title">{title}</div>
                           <p>{details}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
            <img src="" alt="image" />
         </div>
      </section>
   );
};

export default OurServices;
