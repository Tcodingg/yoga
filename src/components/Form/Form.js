import { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
   const [input, setInput] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   const [isValidName, setIsValidName] = useState(null);
   const [isValidEmail, setIsValidEmail] = useState(null);
   const [isValidPhone, setIsValidPhone] = useState(null);

   const handleInput = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };

   // input values
   const name = input.name;
   const email = input.email.trim();
   let phone = input.phone.toString().replace(/\D/g, "").substring(0, 10);
   const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   // display phone input value
   const [phoneValue, setPhoneValue] = useState("");
   useEffect(() => {
      let input = phone;

      var size = input.length;
      if (size > 0) {
         input = "(" + input;
      }
      if (size > 3) {
         input = input.slice(0, 4) + ") " + input.slice(4);
      }
      if (size > 6) {
         input = input.slice(0, 9) + "-" + input.slice(9);
      }
      return setPhoneValue(input);
   }, [phone]);
   // validate input fields
   useEffect(() => {
      function validateInput() {
         // validate name
         name.length === 0
            ? setIsValidName(null)
            : name.length > 4
            ? setIsValidName(true)
            : setIsValidName(false);

         // validate phone
         phoneValue.length === 0
            ? setIsValidPhone(null)
            : phoneValue.length === 14
            ? setIsValidPhone(true)
            : setIsValidPhone(false);
         // validate email
         email.length === 0
            ? setIsValidEmail(null)
            : regexp.test(email)
            ? setIsValidEmail(true)
            : setIsValidEmail(false);
      }
      validateInput();
   }, [input.name, input.phone, input.email, phoneValue]);
   const submitInput = (e) => {
      e.preventDefault();
      if (isValidEmail && isValidEmail && isValidPhone) {
         window.location.reload();
      }
      if (!isValidName) {
         setIsValidName(false);
      }
      if (!isValidEmail) {
         setIsValidEmail(false);
      }
      if (!isValidPhone) {
         setIsValidPhone(false);
      }
   };
   console.log(phoneValue.length);
   console.log(isValidEmail, isValidName, isValidPhone);

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
                  {isValidName === false ? (
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
                  {isValidEmail === false ? (
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
                     value={phoneValue}
                  />
                  {isValidPhone === false ? (
                     <small style={{ color: "red" }}>
                        Please enter a valid phone number.
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
