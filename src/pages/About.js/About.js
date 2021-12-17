import img1 from "../../images/about-right-img.png";
import { FaCheck } from "react-icons/fa";
import "./About.css";
import WhyChooseYoga from "../../components/why choose yoga/WhyChooseYoga";
import TopBanner from "../../components/banners/TopBanner";
const About = () => {
   return (
      <section className="about">
         <TopBanner />
         <div className="bd-container">
            <div className="about-general-info section">
               <div className="about-info">
                  <h1 className="">
                     Yoga <span>studio</span>
                  </h1>
                  <p className="text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Explicabo esse dolorem beatae corrupti praesentium quia
                     enim, quibusdam dolor? Veniam, architecto nam magni cumque
                     eaque voluptatibus delectus culpa, optio magnam molestias
                     labore inventore quisquam. Commodi tempore debitis soluta
                     est inventore voluptas illum laudantium ipsam? Cumque
                     delectus ut recusandae tempore accusamus eligendi eius
                     officiis quas debitis dolores.
                  </p>
                  <div className="about-details">
                     <div className="about-details-content">
                        <div>
                           <div className="icon">
                              <FaCheck />
                           </div>
                        </div>
                        <div>
                           <h3 className="sub-title">Yoga studio</h3>
                           <p className="text">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nisi perspiciatis veniam debitis
                              atque earum laborum optio sit laudantium minima
                              facere.
                           </p>
                        </div>
                     </div>
                     <div className="about-details-content">
                        <div>
                           <div className="icon">
                              <FaCheck />
                           </div>
                        </div>
                        <div>
                           <h3 className="sub-title">Biking Classes</h3>
                           <p className="text">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nisi perspiciatis veniam debitis
                              atque earum laborum optio sit laudantium minima
                              facere.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="about-img-container">
                  <img src={img1} alt="" />
               </div>
            </div>
            <div className="section why-choose-yoga">
               <WhyChooseYoga />
            </div>
         </div>
      </section>
   );
};

export default About;
