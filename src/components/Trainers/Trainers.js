import "./TrainersSlide.css";
import "./Trainers.css";
import TrainersSlide from "./TrainersSlide";

const Trainers = () => {
   return (
      <div className="bd-container trainers">
         <div className="section trainers-container">
            <h1 className="title">our trainers</h1>
            <p className="text trainers-details">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Possimus rem quisquam temporibus odio tempora iusto? Excepturi,
               nostrum? Deleniti eum dolore ipsa odio quod molestias repellat.
            </p>
            <TrainersSlide />
         </div>
      </div>
   );
};

export default Trainers;
