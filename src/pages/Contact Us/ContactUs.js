import TopBanner from "../../components/banners/TopBanner";
import Form from "../../components/Form/Form";
import Map from "../../components/Map/Map";
import "./ContactUs.css";

const ContactUs = () => {
   return (
      <section className="contact ">
         <TopBanner />
         <div className="bd-container">
            <div className="contact-container section">
               <div className="contact-right-content">
                  <Form />
               </div>
               <div className="contact-left-content">
                  <Map />
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactUs;
