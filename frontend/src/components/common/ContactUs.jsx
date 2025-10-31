import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const form = useRef();

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i742u2c",
        "template_mnhd6sc",
        form.current,
        "ai0sEgqPThnGeWYTT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl flex justify-around items-center py-4 px-8">
          <h1 className="text-lg font-bold text-[#235782] flex items-center space-x-2">
            <span className="inline-block bg-blue-100 text-[#235782] p-2 rounded-full">
              🛡️
            </span>
            <span className="font-bold text-2xl">PrepPath</span>
          </h1>

          <nav className="flex items-center space-x-6 ml-auto -mx-56">
            <Link to="/" className="text-gray-700 hover:text-[#235782]">
              Home
            </Link>
            <Link to="/AboutUs" className="text-gray-700 hover:text-[#235782]">
              About Us
            </Link>
            <Link to="/Login">
              <button className="bg-[#235782] text-white px-5 py-2 rounded-md hover:bg-[#1d476a] hover:cursor-pointer">
                Login
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-[#235782] mb-4">
          Get in Touch With Us
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have any questions or feedback? Fill out the form below, and our team
          will reach out to you shortly.
        </p>
      </section>

      {/* Contact Form */}
      <section className="flex justify-center items-center flex-1 px-6 pb-16">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8">
          <h3 className="text-2xl font-semibold text-[#235782] mb-6 text-center">
            Contact Form
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235782]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235782]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject of your message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235782]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#235782]"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#235782] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#1d476a] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#235782] text-white">
        <div className="border-t border-[#235782] text-center text-sm p-8">
          <p>© 2024 All Rights Reserved. Training & Placement Portal</p>
        </div>
      </footer>
    </div>
  );
}
