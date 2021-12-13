import "./Pricing.css";
import { pricingData } from "./pricingData";
const Pricing = () => {
   return (
      <div className="pricing bd-container">
         <div className="section flex pricing-container">
            <h1 className="title">our pricing plan</h1>
            <p className="text">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Veritatis veniam id quaerat fugit error molestiae alias atque
            </p>
            <div className="our-plans">
               {pricingData.map(({ type, cost, features }) => {
                  return (
                     <div className="plans">
                        <div className="prices">
                           <p className="price">
                              <span className="dollar-sign">$</span>
                              <span className="cost">{cost}</span>/mo
                           </p>
                           <p className="sub-title"> {type}</p>
                        </div>
                        <div className="divider"></div>
                        <div className="features">
                           <ul>
                              {features.map((feature) => {
                                 return <li>{feature}</li>;
                              })}
                           </ul>
                        </div>
                        <button>details</button>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Pricing;
