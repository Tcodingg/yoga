import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import About from "./pages/About.js/About";
import Home from "./pages/Home/Home";
const App = () => {
   return (
      <Router>
         <Nav />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;
