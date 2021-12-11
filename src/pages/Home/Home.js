import OurServices from "../../components/Our Services/OurServices";
import Pricing from "../../components/Pricing/Pricing";
import Slides from "../../components/Slides/Slides";
import WhyChooseYoga from "../../components/why choose yoga/WhyChooseYoga";

const Home = () => {
   return (
      <div>
         <Slides />
         <OurServices />
         <WhyChooseYoga />
         <Pricing />
      </div>
   );
};

export default Home;
