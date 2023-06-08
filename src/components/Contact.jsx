import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cooldownDuration = 60;
function Contact() {
  const [cooldown, setCooldown] = useState(false);
  const [remainingTime, setRemainingTime] = useState(cooldownDuration);

  useEffect(() => {
    if (cooldown) {
      const countdownInterval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      const cooldownTimeout = setTimeout(() => {
        setCooldown(false);
      }, cooldownDuration * 1000);

      return () => {
        clearInterval(countdownInterval);
        clearTimeout(cooldownTimeout);
      };
    }
  }, [cooldown]);
  const exposeToast = (text) => {
    toast.success(text, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const exposeErrorToast = () => {
    toast.error(`Please Wait ${remainingTime} Seconds`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="contactSection" id="contact">
      <ToastContainer />
      <h1>Get In Touch</h1>
      <p>
        I'm always open to new opportunities, so feel free to reach out to me, I
        appreciate every message you send and thank you for that ❤️
      </p>
      <div className="container formContainer">
        <ContactForm
          setCooldown={setCooldown}
          cooldown={cooldown}
          exposeToast={exposeToast}
          exposeErrorToast={exposeErrorToast}
        />
      </div>
    </div>
  );
}

export default Contact;
