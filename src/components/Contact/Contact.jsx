import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(form)

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c8oxpbb",
        "template_qxz1xu4",
        form.current,
        "51QetQY_ta9BD2aOL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>villajul3@hotmail.com</h5>
            <a href="mailto:villajul3@hotmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>1133881529</h5>
            <a href="https://web.whatsapp.com/send?phone=+5491133881529">
              Send a Message
            </a>
          </article>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              onChange={handleInputChange}
              type="text"
              value={input.name}
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              onChange={handleInputChange}
              type="email"
              value={input.email}
              name="email"
              placeholder="Your e-mail"
              required
            />
            <textarea
              onChange={handleInputChange}
              value={input.message}
              name="message"
              placeholder="Your message"
              type="text"
              rows="7"
              required
            />
            <input
              type="submit"
              value="Send Message"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
