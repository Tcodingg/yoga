import "./Nav.css";
import "../../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
   const [toggle, setToggle] = useState(false);

   // ===toggle menu===
   const handleToggle = () => {
      setToggle(!toggle);
   };
   console.log(toggle);
   return (
      <header className=" header">
         <div className="header-wrapper bd-container flex">
            <a className="logo" href="##">
               yoga <span>studio</span>
            </a>

            <ul className={toggle ? "menu open" : "menu"}>
               <li onClick={() => setToggle(false)}>
                  <Link to={"/"}>Home</Link>
               </li>
               <li onClick={() => setToggle(false)}>
                  <a href="#">Trainers</a>
               </li>
               <li onClick={() => setToggle(false)}>
                  <a href="#">Contact</a>
               </li>
               <li onClick={() => setToggle(false)}>
                  <Link to={"/about"}>About</Link>
               </li>
            </ul>
            <div onClick={handleToggle} className="burger-container">
               <div className={toggle ? "burger open" : "burger"}></div>
            </div>
         </div>
      </header>
   );
};

export default Nav;
