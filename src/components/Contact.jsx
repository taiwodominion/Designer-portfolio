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

  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!nameRegex.test(formData.name.trim())) {
      formErrors.name = "Please enter a valid name (min 3 characters).";
    }
    if (!emailRegex.test(formData.email.trim())) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (formData.message.trim().length < 10) {
      formErrors.message = "Your message should be at least 10 characters long.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSuccess("✅ Thank you! Your message has been prepared to send.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Let’s Collaborate</h2>
      <p className="contact-subtitle">
        Have a project idea, collaboration, or design inquiry? Fill out the form below — I’d love to hear from you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
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
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Write your message..."
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
