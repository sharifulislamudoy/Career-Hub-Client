import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/job-seeking.json';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-base-200 text-base-content mt-16 relative"
    >
      <div className="footer p-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-10 h-10">
              <Lottie animationData={animationData} loop={true} />
            </div>
            <span className="text-xl font-bold text-primary">CareerHub</span>
          </div>
          <p className="text-sm">
            Your one-stop destination for career opportunities.<br />Find your dream job with ease.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left">
          <span className="footer-title">Quick Links</span>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/jobs" className="link link-hover">Jobs</Link>
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-left">
          <span className="footer-title">Connect With Us</span>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="#" className="tooltip" data-tip="Facebook">
              <FaFacebookF className="text-xl hover:text-primary transition-colors" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="#" className="tooltip" data-tip="Twitter">
              <FaTwitter className="text-xl hover:text-primary transition-colors" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="#" className="tooltip" data-tip="LinkedIn">
              <FaLinkedinIn className="text-xl hover:text-primary transition-colors" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="mailto:support@careerhub.com" className="tooltip" data-tip="Email">
              <FaEnvelope className="text-xl hover:text-primary transition-colors" />
            </motion.a>
          </div>
          <p className="mt-4 text-sm text-gray-500">support@careerhub.com</p>
        </div>
      </div>

      <div className="text-center p-4 border-t border-base-300 text-sm">
        © {new Date().getFullYear()} CareerHub. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 btn btn-circle btn-primary shadow-lg"
        aria-label="Scroll to top"
      >
        ↑
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
