import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.scss';
import config from './config.json';
import Layout from "../../components/layout/main";

emailjs.init('dxNZAaHexZxryb3ZM');

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gdpr: false,
  });

  const [submitted, setSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.gdpr) {
      alert('You must agree to the GDPR terms.');
      return;
    }

    emailjs
      .sendForm('service_8ar2u3r', 'template_7fz5p4b', e.target, 'dxNZAaHexZxryb3ZM')
      .then(() => {
        setSubmitted(true); // Lock form but keep it visible
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <div className="contact-form">
      <Layout pageId={6}>
        <h1 className="page-heading" dangerouslySetInnerHTML={{ __html: config.intro.heading }}></h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={submitted} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={submitted} />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required disabled={submitted} />
          </label>
          <label className="gdpr-label">
            <input className="gdpr" type="checkbox" name="gdpr" checked={formData.gdpr} onChange={handleChange} required disabled={submitted} />
            I agree to the <a href="/data-protection-and-confidentiality-policy.pdf" target="_blank" rel="noopener noreferrer">GDPR terms</a>.
          </label>
          <button className="send-btn" type="submit" disabled={submitted}>{submitted ? "Message Sent" : "Send"}</button>

          {submitted && <p className="success-message">Thank you for getting in touch! We will respond as soon as possible.</p>}
        </form>
      </Layout>
    </div>
  );
};

export default ContactForm;

