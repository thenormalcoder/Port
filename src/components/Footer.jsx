// React component for a portfolio footer with shiny buttons for social media handles
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        {/* Footer Title */}
        <div className='mb-4 md:mb-0'>
          <h1 className='text-2xl font-bold'>Jatin Bhojwani</h1>
          <p className='text-gray-400'>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Social Media Buttons */}
        <div className='flex space-x-4'>
          <a
            href='https://github.com/thenormalcoder'
            className='text-white p-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-110 transition-transform'
            target='_blank' rel='noopener noreferrer'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/jatin-bhojwani-52548b1a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            className='text-white p-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-110 transition-transform'
            target='_blank' rel='noopener noreferrer'
          >
            <FaLinkedin size={24} />
          </a>
      
          <a
            href='https://instagram.com/the_bhojwani'
            className='text-white p-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-110 transition-transform'
            target='_blank' rel='noopener noreferrer'
          >
            <FaInstagram size={24} />
          </a>
        </div>
        
        {/* Contact Info */}
        <div className='mt-4 md:mt-0'>
          <p>Email: <a href='mailto:jatin007bhojwani@gmail.com' className='text-blue-400 hover:underline'>jatin007bhojwani@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
