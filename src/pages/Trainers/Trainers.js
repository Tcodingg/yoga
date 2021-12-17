import TopBanner from "../../components/banners/TopBanner";
import TrainersSlide from "../../components/Trainers/TrainersSlide";
import "./Trainers.css";
import { trainersData } from "./trainersData";
const Trainers = () => {
   return (
      <section className="trainers">
         <TopBanner />
         <div className="bd-container trainers-container">
            <div className="section trainers-wrapper">
               <div className="trainers-content">
                  {trainersData.map(({ img, title, details }) => {
                     return (
                        <div className="trainers-content">
                           <div className="right-trainers-content">
                              <hi className="title">{title}</hi>
                              <p className="text">{details}</p>
                           </div>
                           <div className="left-trainers-content">
                              <img src={img} alt="" />
                           </div>
                        </div>
                     );
                  })}
               </div>
               <TrainersSlide />
            </div>
         </div>
      </section>
   );
};

export default Trainers;
