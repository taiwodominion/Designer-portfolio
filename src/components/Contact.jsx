import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // regex patterns
  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!nameRegex.test(formData.name)) {
      formErrors.name = "Enter a valid name (letters only, min 3 chars).";
    }
    if (!emailRegex.test(formData.email)) {
      formErrors.email = "Enter a valid email address.";
    }
    if (formData.message.trim().length < 10) {
      formErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (validateForm()) {
      console.log("Form data ready to send:", formData);
      setSuccess("✅ Message is ready to be sent!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">Let’s work together on your next project!</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>

        {success && <p className="success">{success}</p>}
      </form>
    </section>
  );
};

export default Contact;
