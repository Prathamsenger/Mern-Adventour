import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineRight } from 'react-icons/ai';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Adventour</h3>
            <p className="text-gray-400 mb-6">
              Creating innovative solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect with us</h3>
            <ul className="space-y-2">
              {['About Us', 'activities', 'Contact', ].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <AiOutlineRight size={16} className="mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MdLocationOn className="mt-1 mr-3 text-gray-400" size={18} />
                <span className="text-gray-400">Mohali, India </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-gray-400" size={18} />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <HiMail className="mr-3 text-gray-400" size={18} />
                <span className="text-gray-400">Adventour@company.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="p-2 w-full bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 rounded-r px-4 py-2 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Adventour. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}