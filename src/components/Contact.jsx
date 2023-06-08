import ContactForm from "./ContactForm";
import { useState } from "react";
import MyToast from "./MyToast";
function Contact() {
  const [showToast, setShowToast] = useState(false);
  return (
    <div className="contactSection" id="contact">
      <h1>Get In Touch</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur repellat sequi temporibus ad natus accusantium reiciendis,
        maiores
      </p>
      <div className="container formContainer">
        <ContactForm setShowToast={setShowToast} />
      </div>
      <MyToast />
    </div>
  );
}

export default Contact;
