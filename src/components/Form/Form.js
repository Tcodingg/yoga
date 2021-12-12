import "./Form.css";
import Map from "../Map/Map";

const Form = () => {
   return (
      <div className=" bd-container contact-us section">
         <h1 className="title">Contact Us</h1>{" "}
         <div className="contact-wrapper">
            <form>
               <input type="text" placeholder="Name *" />
               <input type="text" placeholder="Email *" />
               <input type="text" placeholder="Phone *" />
               <textarea name="message" placeholder="Message"></textarea>
               <button>send message</button>
            </form>
            <Map />
         </div>
      </div>
   );
};

export default Form;
