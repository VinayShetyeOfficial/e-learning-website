import React from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8b935631-78e0-4a10-bc11-f498676c7186");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={assets.msg_icon} alt="message_icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={assets.mail_icon} alt="mail_icon" />
            Contact@Edusity
          </li>
          <li>
            <img src={assets.phone_icon} alt="phone_icon" />
            +1 717-550-1675
          </li>
          <li>
            <img src={assets.location_icon} alt="location_icon" />
            77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={6}
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
            <img src={assets.white_arrow} alt="arrow_icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
