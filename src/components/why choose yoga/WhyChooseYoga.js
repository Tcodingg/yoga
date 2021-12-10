import { useState } from "react";
import Expandable from "./Expandable";
import "./WhyChooseYoga.css";
import choose_yoga from "../../images/choose_yoga.jpg";
import { chooseYoga } from "./chooseYoga";
const WhyChooseYoga = () => {
   const [itemId, setItemId] = useState(null);
   const [expand, setExpand] = useState(false);
   const handleClick = (id) => {
      setItemId(id);
      setExpand((preState) => !preState);
   };
   // useEffect(() => {
   // }, [itemId]);

   return (
      <div className="choose-yoga bd-container">
         <div className="choose-yoga-container section flex">
            <div className="yoga-info">
               <div>
                  <h1 className="title">why choose yoga</h1>
                  <p className="text">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Hic ut iure odio dignissis pariatur quisquam Lorem, ipsum
                     dolor.
                  </p>
                  <div className="details">
                     {chooseYoga.map(({ title, details, id }, i) => {
                        return (
                           <Expandable
                              title={title}
                              details={details}
                              id={id}
                           />
                        );
                     })}
                  </div>
               </div>
            </div>
            <img src={choose_yoga} alt="...loading" />
         </div>
      </div>
   );
};

export default WhyChooseYoga;
