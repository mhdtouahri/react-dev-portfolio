import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Discutons de vos projets !</h1>
        <p>
          Vous n’aimez pas les formulaires ? Envoyez-moi un{" "}
          <a href="mailto:mohand.touahri2@gmail.com">email</a>. 👋
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          

          {/* 
          <h3>Ou retrouvez-moi ici :</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div> 
          */}
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            mohand.touahri2@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +33 605 53 48 36
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            France
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" netlify>
          <input
            type="text"
            name="senderName"
            placeholder="Votre nom"
            required
          />
          <input
            type="text"
            name="senderEmail"
            placeholder="Votre email"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required
          />
          <textarea
            placeholder="Votre message"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;