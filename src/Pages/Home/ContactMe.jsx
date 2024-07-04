import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_06xe7vr', 'template_e4w1x35', form.current, 'sztTgBPGNRNeyQUv5')
      .then((result) => {
        console.log(result,"success");
        toast.success('Email successfully sent!');
        form.current.reset();
      }, (error) => {
        console.log(error);
        toast.error('Email sending failed, Please try again!');
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">Contact me to request any service I offer...</p>
      </div>
      
      <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="user_name" className="contact--label">
            <span className="text-md">Full Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_name"
              id="user_name"
              required
            />
          </label>
     
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="user_email"
              id="email"
              required
            />
          </label>
          <label htmlFor="subject" className="contact--label">
            <span className="text-md">Subject</span>
            <input
              type="text"
              className="contact--input text-md"
              name="subject"
              id="subject"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default ContactMe;
