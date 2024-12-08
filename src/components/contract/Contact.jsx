import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    if (!isValid) {
      e.preventDefault();
      alert("Please enter a valid email address");
      return;
    }

    e.preventDefault();
    emailjs
      .sendForm(
        "service_867btow",
        "template_f87nwyz",
        form.current,
        "Fy0Y-Eoz6b03WV7rh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    setIsValid(emailRegex.test(e.target.value));
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-background-space">

      </div>
      <div className="contact-wrapper">
        <div className="contact-title">Contact</div>
        <div className="contact-desc">
          Feel free to reach out to me for any questions or opportunities!
        </div>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-title">Email Me 🚀</div>
          <input
            className="contact-input"
            placeholder="Your Email"
            name="from_email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            required
            onChange={handleEmailChange}
          />
          <input className="contact-input" placeholder="Your Name" name="from_name" />
          <input className="contact-input" placeholder="Subject" name="subject" />
          <textarea
            className="contact-input-message"
            placeholder="Message"
            name="message"
            rows={4}
          />
          <input className="contact-button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
