import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
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
          <form action="">
            <input type="text" placeholder="Your full name" required />
            <input type="email" placeholder="Your e-mail" required />
            <textarea
              placeholder="Your message"
              type="text"
              className="input_area"
              cols="80"
              rows="5"
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
