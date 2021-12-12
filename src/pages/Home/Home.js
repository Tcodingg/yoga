import Form from "../../components/Form/Form";
import OurServices from "../../components/Our Services/OurServices";
import Pricing from "../../components/Pricing/Pricing";
import Slides from "../../components/Slides/Slides";
import Trainers from "../../components/Trainers/Trainers";
import WhyChooseYoga from "../../components/why choose yoga/WhyChooseYoga";

const Home = () => {
   return (
      <div>
         <Slides />
         <OurServices />
         <WhyChooseYoga />
         <Pricing />
         <Trainers />
         <Form />
      </div>
   );
};

export default Home;
