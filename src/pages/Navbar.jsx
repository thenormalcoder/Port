import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between top-0 fixed w-full z-10">
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-gray-800">Logo</div>
      
      {/* Middle - Links */}
      <div className="hidden md:flex space-x-6">
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition">About</ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={1000} className="cursor-pointer text-gray-600 hover:text-blue-500 transition">Experience</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={1000} className="cursor-pointer text-gray-600 hover:text-blue-500 transition">Projects</ScrollLink>
        <ScrollLink to="Achievements" smooth={true} duration={1000} className="cursor-pointer text-gray-600 hover:text-blue-500 transition">Achievements</ScrollLink>
        <ScrollLink to="certification" smooth={true} duration={1000} className="cursor-pointer text-gray-600 hover:text-blue-500 transition">Certification</ScrollLink>
       
      </div>

      {/* Right - GitHub Link */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="https://github.com/thenormalcoder" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-gray-800 hover:text-blue-500 transition" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.599.111.793-.26.793-.577 0-.285-.011-1.042-.016-2.045-3.338.725-4.042-1.61-4.042-1.61-.545-1.384-1.33-1.753-1.33-1.753-1.086-.743.082-.728.082-.728 1.2.084 1.833 1.234 1.833 1.234 1.068 1.831 2.803 1.302 3.486.996.108-.773.419-1.302.763-1.602-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.467-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.922.43.371.824 1.104.824 2.225 0 1.607-.015 2.902-.015 3.296 0 .319.192.692.8.574C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z" />
          </svg>
        </a>
        <a
          href="https://github.com/thenormalcoder"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          GitHub
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 space-y-4">
          <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu} className="block cursor-pointer text-gray-600 hover:text-blue-500 transition">About</ScrollLink>
          <ScrollLink to="experience" smooth={true} duration={1000} onClick={toggleMenu} className="block cursor-pointer text-gray-600 hover:text-blue-500 transition">Experience</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={1500} onClick={toggleMenu} className="block cursor-pointer text-gray-600 hover:text-blue-500 transition">Projects</ScrollLink>
          <ScrollLink to="certification" smooth={true} duration={2000} onClick={toggleMenu} className="block cursor-pointer text-gray-600 hover:text-blue-500 transition">Certification</ScrollLink>
          <a href="https://github.com/thenormalcoder" className="block text-gray-600 hover:text-blue-500 transition">GitHub</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

