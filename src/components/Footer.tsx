import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/khanyisa-verification-logo.png" alt="Khanyisa Verification Logo" className="w-10 h-10 rounded-lg object-contain bg-white p-1" />
              <div className="ml-3">
                <h3 className="text-lg font-bold">Khanyisa Verification</h3>
                <p className="text-sm text-gray-300">SANAS Accredited B-BBEE Rating Agency</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Level 1 B-BBEE Contributor with 135% BEE procurement recognition, providing impartial, 
              speedy, and quality B-BBEE Rating services.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Block B, Ground Floor, Clearwater Office Park, 1 South Boksburg
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>010 900 0477</p>
                  <p>067 714 8603</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@khanyisaverification.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-green-500 text-sm transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-green-500 text-sm transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-green-500 text-sm transition-colors">
                Services
              </Link>
              <Link to="/appeals" className="block text-gray-300 hover:text-green-500 text-sm transition-colors">
                Appeals/Complaints
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-green-500 text-sm transition-colors">
                Contact
              </Link>
              <Link to="/quote" className="block text-gray-300 hover:text-green-500 text-sm transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Copyright ©2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
