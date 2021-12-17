import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import About from "./pages/About.js/About";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact Us/ContactUs";
import Trainers from "./pages/Trainers/Trainers";
const App = () => {
   return (
      <Router>
         <Nav />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/trainers" element={<Trainers />} />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;
