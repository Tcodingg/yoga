import { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
   const [input, setInput] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   const [invalidName, setInvalidName] = useState(null);
   const [invalidEmail, setInvalidEmail] = useState(null);
   const [invalidPhone, setInvalidPhone] = useState(null);

   const handleInput = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };

   // input values
   const name = input.name;
   const email = input.email;
   let phone = input.phone.replace(/[^A-Z0-9]/gi, "");
   const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   useEffect(() => {
      function validateInput() {
         // validate name
         name.length === 0
            ? setInvalidName(null)
            : name.length > 4
            ? setInvalidName(true)
            : setInvalidName(false);

         // validate phone
         phone.length === 0
            ? setInvalidPhone(null)
            : phone.length === 10
            ? setInvalidPhone(true)
            : setInvalidPhone(false);
         // validate email
         email.length === 0
            ? setInvalidEmail(null)
            : regexp.test(email)
            ? setInvalidEmail(true)
            : setInvalidEmail(false);
      }
      validateInput();
   }, [input]);
   const submitInput = (e) => {
      e.preventDefault();
      console.log(input);
   };
   console.log(invalidEmail, invalidName, invalidPhone);

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
                  {invalidName === false ? (
                     <small style={{ color: "red" }}>
                        Please enter a valid name.
                     </small>
                  ) : (
                     ""
                  )}
               </div>
               <div className="input-container">
                  <input
                     onChange={handleInput}
                     name="email"
                     type="text"
                     placeholder="Email *"
                     value={input.email}
                  />
                  {invalidEmail === false ? (
                     <small style={{ color: "red" }}>
                        Please enter a valid Email.
                     </small>
                  ) : (
                     ""
                  )}
               </div>
               <div className="input-container">
                  <input
                     onChange={handleInput}
                     name="phone"
                     type="text"
                     placeholder="Phone *"
                     value={input.phone}
                  />
                  {invalidPhone === false ? (
                     <small style={{ color: "red" }}>
                        Please enter valid phone number.
                     </small>
                  ) : (
                     ""
                  )}
               </div>
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
