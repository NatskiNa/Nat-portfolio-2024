import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

import './styles/Contact.css';

const Contact = () => {
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourMessage, setYourMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: yourName,
      email: yourEmail,
      message: yourMessage,
      to_name: 'Natski',
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setYourName('');
        setYourEmail('');
        setYourMessage('');

        // Redirect to the main page after successfully sending the email
        navigate('/');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contactMe-container">
      <h1 className="section-title">CONTACT FORM</h1>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="full-name"
              placeholder="Your Name"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container textarea">
            <textarea
              name="message"
              placeholder="Your Message"
              value={yourMessage}
              onChange={(e) => setYourMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-red">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
