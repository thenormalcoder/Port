//service_cv42qfh
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS - Send email using emailjs service
    emailjs
      .send(
        'service_8k16kjm', // Replace with your EmailJS service ID
        'template_rqox2pk', // Replace with your EmailJS template ID
        formData,
        'r-31F3d6lz0-lbnjT' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSent(true);
          setErrorMessage('');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (err) => {
          console.error('FAILED...', err);
          setErrorMessage('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    // <div className="flex justify-center items-center w-1/2 h-screen bg-gray-100 p-4 text-black">
      <form onSubmit={handleSubmit} className="md:w-full md:max-w-lg w-[350px] h-[500px] p-8 rounded-lg shadow-md border-2 border-black font-bold text-black bg-gray-400">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm  font-bold text-black">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-bold ">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>

        {isSent && (
          <p className=" border-4 border-green-600 mt-4 text-white text-center font-bold">Your message has been sent successfully!</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
        )}
      </form>
    // </div>
  );
};

export default Contact;
