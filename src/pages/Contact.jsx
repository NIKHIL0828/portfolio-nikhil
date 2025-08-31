import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage('Sending...');

    emailjs.sendForm(
        'YOUR_SERVICE_ID',      // Get from EmailJS > Email Services
        'YOUR_TEMPLATE_ID',     // Get from EmailJS > Email Templates
        form.current,
        'YOUR_PUBLIC_KEY'       // Get from EmailJS > Account > API Keys
      )
      .then(
        (result) => {
          setMessage('Message sent successfully! ✅');
          form.current.reset();
        },
        (error) => {
          setMessage('Failed to send message. Please try again. ❌');
        }
      );
  };

  return (
    <section className="page-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
      <p className="status-message">{message}</p>
    </section>
  );
};

export default Contact;