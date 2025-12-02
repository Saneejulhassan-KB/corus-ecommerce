import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, CreditCard, ArrowRight, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Men', href: '#' },
      { name: 'Women', href: '#' },
      { name: 'Accessories', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Order Status', href: '#' },
      { name: 'Shipping & Delivery', href: '#' },
      { name: 'Returns & Exchanges', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    company: [
      { name: 'About ShopZen', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Stay in the loop
            </h3>
            <p className="text-gray-400 text-lg max-w-md">
              Subscribe to our newsletter for exclusive offers, new arrivals, and insider fashion tips.
            </p>
          </div>
          <div className="w-full max-w-md lg:ml-auto">
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-32 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-500 text-white px-6 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group/btn"
              >
                <span>Join</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold mb-6 tracking-tight">ShopZen</h2>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Your premium destination for curated fashion and lifestyle products. 
              We believe in quality, sustainability, and exceptional customer service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-lg mb-6 text-white">Shop</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="font-semibold text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="font-semibold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <span>123 Fashion Avenue,<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>support@shopzen.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ShopZen. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
               {/* Placeholder for payment icons - using text/divs for now or simple icons */}
               <div className="h-8 px-2 bg-white rounded flex items-center"><span className="text-blue-800 font-bold text-xs">VISA</span></div>
               <div className="h-8 px-2 bg-white rounded flex items-center"><span className="text-red-600 font-bold text-xs">Mastercard</span></div>
               <div className="h-8 px-2 bg-white rounded flex items-center"><span className="text-blue-500 font-bold text-xs">PayPal</span></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;