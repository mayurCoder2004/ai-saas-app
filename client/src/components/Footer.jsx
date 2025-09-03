import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full bg-[#F9FAFB] text-gray-600 mt-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-200 pb-10">
        
        {/* Logo + About */}
        <div className="md:max-w-md">
          <div className="flex items-center gap-3">
            <img src={assets.logo} alt="logo" className="w-24 h-24 object-contain" />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            Aivana helps creators and businesses craft stunning content with AI — 
            from articles to visuals — faster and smarter than ever before.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-[#3588F2] transition">Home</a></li>
              <li><a href="/about" className="hover:text-[#F59E0B] transition">About</a></li>
              <li><a href="/ai" className="hover:text-[#9333EA] transition">AI Tools</a></li>
              <li><a href="/pricing" className="hover:text-[#20C363] transition">Pricing</a></li>
              <li><a href="/contact" className="hover:text-[#F97316] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in Touch</h2>
            <div className="text-sm space-y-2 text-gray-500">
              <p>Email: support@aivana.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-10 border-b border-gray-200 pb-8 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Subscribe to our Newsletter</h3>
        <p className="text-sm text-gray-500 mb-5">
          Get the latest AI tools, tips, and updates delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3588F2]"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-[#3588F2] text-white font-medium hover:bg-[#2563EB] transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Section */}
      <p className="pt-6 text-center text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()} Aivana. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
