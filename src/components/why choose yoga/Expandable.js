import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import "./WhyChooseYoga.css";

const Expandable = ({ title, details, id }) => {
   const [expand, setExpand] = useState(false);
   function handleClick() {
      setExpand((prevState) => !prevState);
   }
   return (
      <div key={id} className="details-wrapper">
         <div onClick={handleClick}>
            <p className="title">{title}</p>
            <button>{expand ? <BiMinus /> : <BiPlus />}</button>
         </div>
         <p
            className="text"
            style={{
               transition: "all 0.35s ease-out",
               maxHeight: expand ? "200px" : "0px",
               overflow: "hidden",
            }}
         >
            {details}
         </p>
      </div>
   );
};

export default Expandable;
