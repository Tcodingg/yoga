import { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
   const [input, setInput] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   const handleInput = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };
   const submitInput = (e) => {
      e.preventDefault();
      console.log(input);
   };

   return (
      <div className=" bd-container contact-us section">
         <h1 className="title">Contact Us</h1>{" "}
         <div className="contact-wrapper">
            <form className="form">
               <div className="input-container">
                  <input
                     onChange={handleInput}
                     name="name"
                     type="text"
                     placeholder="Name *"
                     value={input.name}
                  />
                  <small>this is error message</small>
               </div>
               <input
                  onChange={handleInput}
                  name="email"
                  type="text"
                  placeholder="Email *"
                  value={input.email}
               />
               <input
                  onChange={handleInput}
                  name="phone"
                  type="text"
                  placeholder="Phone *"
                  value={input.phone}
               />
               <textarea
                  onChange={handleInput}
                  name="message"
                  placeholder="Message"
                  value={input.message}
               ></textarea>
               <button onClick={submitInput}>send message</button>
            </form>
         </div>
      </div>
   );
};

export default Form;
