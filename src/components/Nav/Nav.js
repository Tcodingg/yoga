import "./Nav.css";
const Nav = () => {
   return (
      <header className="bd-container header">
         <div className="header-wrapper flex">
            <h2 className="icon"> yoga</h2>
            <div className="burger-container">
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
