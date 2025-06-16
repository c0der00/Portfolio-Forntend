import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import BackToTopButton from './BackToTopButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://portfolio-backend-kappa-five.vercel.app/api/contact', formData);
      alert(response.data);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-[#0d1117] py-20 px-4 sm:px-6 lg:px-16">
      <h1 className="text-center text-white text-3xl sm:text-4xl font-semibold mb-14 font-[Poppins]">
        Contact Me
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-6xl mx-auto">
        {/* Contact Info Section */}
        <div className="w-full lg:w-1/3 bg-[#1f2937] p-8 rounded-lg shadow-lg">
          <ul className="space-y-6 text-white text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
              <a href="tel:8156022738" className="hover:text-blue-400">
                +91-8156022738
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
              <a href="mailto:hardik.210180107052@gmail.com" className="hover:text-blue-400 break-all">
                hardik.210180107052@gmail.com
              </a>
            </li>
          </ul>

          <hr className="border-gray-600 my-6" />

          <div className="flex space-x-5 text-white">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.instagram.com/vandar921" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 bg-[#1f2937] p-8 rounded-lg shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 bg-[#111827] text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 bg-[#111827] text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-4 bg-[#111827] text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send Message
          </button>
        </form>
      </div>

      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
