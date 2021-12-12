import "./Form.css";
const Form = () => {
   return (
      <div className=" contact-us section">
         <h1 className="title">Contact Us</h1>
         <div className="contact-wrapper">
            <form>
               <input type="text" placeholder="Name *" />
               <input type="text" placeholder="Email *" />
               <input type="text" placeholder="Phone *" />
               <textarea name="message" placeholder="Message"></textarea>
               <button>send message</button>
            </form>
         </div>
      </div>
   );
};

export default Form;
