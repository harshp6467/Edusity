import React from "react";
import "../Contact/Contact.css";
import message from "../../assets/mess.png";
import email from "../../assets/emaill.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import Whiteaero from "../../assets/white-aero.png";
import sweet from "sweetalert2";

function Contact() {
  const [result, setResult] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const validateForm = (formData) => {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Please Enter Name";
    }
    if (phone.trim() === "") {
      newErrors.phone = "Please Enter Phone";
    }
    if (message.trim() === "") {
      newErrors.message = "Please Write Something";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    

    const formData = new FormData(event.target);
    if (!validateForm(formData)) {
      return;
    }

    formData.append("access_key", "2f6c5184-889b-48e8-8d89-1547b7772c1a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      sweet.fire({
        title: "Done",
        text: "Email sent successfully!",
        icon: "success",
        button: "Aww yiss!",
      });
      event.target.reset();
      setErrors({});
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message} alt="" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={email} alt="" /> harshpatel6853@gmail.com
          </li>
          <li>
            <img src={phone} alt="" /> +91 7567461989
          </li>
          <li>
            <img src={location} alt="" /> Vastral Ahmedabad
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <label htmlFor="message">Write Your Text Here</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter Your Message"
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" className="btn dark-btn">
            Submit now <img src={Whiteaero} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
