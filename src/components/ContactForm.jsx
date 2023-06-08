import React, { useState } from "react";
import Axios from "axios";

const botToken = "6291591213:AAHNS0cOMnCfPelbFjo7MHtqOGZtB4SarLE";
const chatId = "-955365268";

function ContactForm({ exposeErrorToast, cooldown, setCooldown, exposeToast }) {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const handleSend = () => {
    if (cooldown) {
      exposeErrorToast("Please Wait 30sec");
      return;
    }
    Axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: `Email: ${email}\nMobile Number:${mobile}\nMessage:${message}`,
    })
      .then((response) => {
        console.log("Message sent successfully:", response.data);
        exposeToast("Messege Sent!");
        setCooldown(true);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  return (
    <form>
      <div class="mb-3">
        <label for="emailInput" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="Please enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="mobileInput" class="form-label">
          Mobile
        </label>
        <input
          id="mobileInput"
          className="form-control"
          type="text"
          placeholder="Enter mobile"
          pattern="[0-9]{10}"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="messegeArea" class="form-label">
          Message
        </label>
        <textarea
          placeholder="Enter your message"
          class="form-control"
          id="messegeArea"
          rows="4"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>
      <a
        onClick={handleSend}
        className="submitBtn"
        id="submitBtn"
        href="#submitBt"
      >
        Submit {` >`}
      </a>
    </form>
  );
}

export default ContactForm;
