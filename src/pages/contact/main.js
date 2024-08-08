import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.scss';
import config from './config.json';
import media from '../../media';
import Layout from "../../components/layout/main";
import AnimationOnScroll from '../../components/animation-on-scroll/main';

emailjs.init('dxNZAaHexZxryb3ZM');

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gdpr: false,
  });

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
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again.');
        console.error('EmailJS error:', error);
      });

    setFormData({
      name: '',
      email: '',
      message: '',
      gdpr: false,
    });
  };

  return (
    <div className="contact-form">
      <Layout  pageId={4}>
        <h1 className="heading" dangerouslySetInnerHTML={{ __html: config.intro.heading }}></h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <label>
            <input type="checkbox" name="gdpr" checked={formData.gdpr} onChange={handleChange} required />
            I agree to the GDPR terms.
          </label>
          {/* Hidden inputs to map form fields to EmailJS template variables */}
          <input type="hidden" name="to_name" value="Your Name" />
          <input type="hidden" name="from_name" value={formData.name} />
          <input type="hidden" name="from_email" value={formData.email} />
          <button type="submit">Send</button>
        </form>
      </Layout>
    </div>
  );
};

export default ContactForm;
