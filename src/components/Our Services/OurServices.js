import "./OurServices.css";
import { services } from "./services";
import meditate from "../../images/meditate.jpg";
const OurServices = () => {
   return (
      <section className="our-services bd-container">
         <div className="section">
            <h3 className="sub-title">What We Do</h3>
            <h1 className="title">Our Services</h1>
            <div className="services flex">
               <div className="list-services">
                  {services.map(({ icon, title, details }, i) => {
                     return (
                        <div className="service" key={i}>
                           <div className="icon-wrapper">{icon}</div>
                           <div className="service-details">
                              <div className="sub-title">{title}</div>
                              <p>{details}</p>
                           </div>
                        </div>
                     );
                  })}
               </div>
               <div className="services-img-container">
                  <img src={meditate} alt="...loading" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurServices;
