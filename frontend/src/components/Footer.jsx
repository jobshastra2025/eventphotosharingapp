import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FE505A] text-white">
      {/* Main Footer Content */}
      <div className=" max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Photo Sharing App</h3>
            <p className="text-white leading-relaxed">
              Building amazing digital experiences that connect people and
              create lasting impact in photo sharing among their circle
              worldwide.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="w-5 h-5  cursor-pointer transition-colors" />
              <FaXTwitter className="w-5 h-5  cursor-pointer transition-colors" />
              <FaInstagram className="w-5 h-5  cursor-pointer transition-colors" />
              <FaLinkedinIn className="w-5 h-5  cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/"}
                  className="hover:text-white transition-colors hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/"}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Photos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-sm">
                  123 Madhavpur, Hyderabad, Telangana 500002
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-sm">+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-sm">help@photosharingapp.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-white">
                Subscribe to our newsletter for the latest updates.
              </p>
            </div>
            <div className="relative flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 text-black/50 bg-white focus:outline-none border-none rounded-md"
              />
              <button className="absolute bg-none text-[#FE505A] border-none focus:outline-none  text-sm font-semibold right-2 top-1/2 -translate-y-1/2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-white">
              © {currentYear} Photo Sharing App. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to={"/"} className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to={"/"} className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to={"/"} className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
