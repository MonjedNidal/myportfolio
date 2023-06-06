import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contactSection">
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
