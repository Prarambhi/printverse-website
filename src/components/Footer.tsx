//import React from 'react';
import { Printer, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Printer className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Printverse</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for all printing needs. We deliver exceptional quality 
              with fast turnaround times and competitive pricing.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Single Color Printing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Multi-Color Printing</li>
              <li className="hover:text-white cursor-pointer transition-colors">4-Color Process</li>
              <li className="hover:text-white cursor-pointer transition-colors">Binding Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">ID Cards & Lanyards</li>
              <li className="hover:text-white cursor-pointer transition-colors">Graphic Designing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Portfolio</li>
              <li className="hover:text-white cursor-pointer transition-colors">Get Quote</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <p>123 Printing Street<br />Business District, City 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@printverse.com</p>
              <p className="text-sm">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Printverse. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;