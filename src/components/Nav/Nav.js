import "./Nav.css";
import { useState } from "react";
const Nav = () => {
   const [toggle, setToggle] = useState(false);

   // ===toggle menu===
   const handleToggle = () => {
      setToggle(!toggle);
   };
   console.log(toggle);
   return (
      <header className="bd-container header">
         <div className="header-wrapper flex">
            <h2 className="icon"> yoga</h2>
            <div onClick={handleToggle} className="burger-container">
               <div className="burger"></div>
            </div>

            <ul className="menu">
               <li>
                  <a href="#">Home</a>
               </li>
               <li>
                  <a href="#">Trainers</a>
               </li>
               <li>
                  <a href="#">Contact</a>
               </li>
               <li>
                  <a href="#">About</a>
               </li>
            </ul>
         </div>
      </header>
   );
};

export default Nav;
