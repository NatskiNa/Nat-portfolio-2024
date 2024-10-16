import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/Contact.css';

const Contact = () => {
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourMessage, setYourMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const serviceId = 'natski-portfolio-email';
    // const templateId = 'template_am1zzv9';
    // const publicKey = '-gAlacLDLXvi_WeqD';
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
    <form onSubmit={handleSubmit}>
      <div id="contact" className="contactMe-container">
        <div className="input-container">
          <h2>Contact Me</h2>
          <input
            type="text"
            name="full-name"
            className="input"
            placeholder="Your Name"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            required
          />
          <div className="input-container">
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your Email"
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container textarea">
            <textarea
              name="message"
              className="input"
              placeholder="Your Message"
              value={yourMessage}
              onChange={(e) => setYourMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <input type="submit" value="Send" className="sendMessage-btn" />
        </div>
        <div className="contact-buttons">
          <a
            className="contact-info"
            href="https://github.com/NatskiNa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={27} className="contact-btn" /> Github
          </a>
          <a
            className="contact-info"
            href="https://www.linkedin.com/in/natskina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={27} className="contact-btn" /> LinkedIn
          </a>
        </div>
      </div>
    </form>
  );
};

export default Contact;
