import React from "react";

function ContactForm() {
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
        ></textarea>
      </div>
      <a className="submitBtn" href="/">
        Submit {` >`}
      </a>
    </form>
  );
}

export default ContactForm;
