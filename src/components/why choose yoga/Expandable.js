import { useState } from "react";
import "./WhyChooseYoga.css";

const Expandable = ({ title, details, id }) => {
   const [expand, setExpand] = useState(false);
   function handleClick() {
      setExpand((prevState) => !prevState);
   }
   return (
      <div key={id} className="details-wrapper">
         <div>
            <h3 className="title">{title}</h3>
            <button onClick={handleClick}>+</button>
         </div>
         <p
            className="text"
            style={{
               display: expand ? "block" : "none",
            }}
         >
            {details}
         </p>
      </div>
   );
};

export default Expandable;
