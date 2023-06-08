import ContactForm from "./ContactForm";
import Footer from "./Footer";
function Contact() {
  return (
    <div className="contactSection" id="contact">
      <h1>Get In Touch</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur repellat sequi temporibus ad natus accusantium reiciendis,
        maiores
      </p>
      <div className="container formContainer">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
