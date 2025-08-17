"use client";
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSend = () => {
    if (email.trim()) {
      alert(`Sending email: ${email}`);
      setEmail("");
    }
  };
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-3">Exclusive</h3>
          <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
          <p className="text-gray-400 mb-4">Get 10% off your first order</p>
          <div className="flex border border-white rounded overflow-hidden w-50">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent px-3 py-2 flex-grow outline-white text-sm w-40"
            />
            <button
              onClick={handleSend}
              className="px-3 flex items-center justify-center hover:bg-gray-800"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <p className="text-gray-400 mb-2 leading-relaxed">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-gray-400 mb-2">exclusive@gmail.com</p>
          <p className="text-gray-400">+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Account</h3>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            My Account
          </p>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            Login / Register
          </p>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            Cart
          </p>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            Wishlist
          </p>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            Shop
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            Terms Of Use
          </p>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            FAQ
          </p>
          <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
            Contact
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Download App</h3>
          <p className="text-gray-400 text-sm mb-4">
            Save $3 with App New User Only
          </p>
          <div className="flex items-start gap-3">
            <Image src="/images/qr.png" alt="QR code" width={120} height={100} />
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="border-2 flex items-center text-white px-3 py-1 rounded-lg hover:opacity-80 transition"
              >
                <Image
                  src="/images/playstore.jpg"
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <div className="ml-2">
                  <p className="text-[10px]">GET IT ON</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </a>
              <a
                href="#"
                className="border-2 flex items-center text-white px-3 py-1 rounded-lg hover:opacity-80 transition"
              >
                <Image
                  src="/images/apple.webp"
                  alt="App Store"
                  width={30}
                  height={30}
                />
                <div className="ml-2">
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex gap-8 mt-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-sm flex items-center justify-center gap-1 mt-10 border-t border-gray-700 pt-4">
        <FaRegCopyright /> Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};
export default Footer;