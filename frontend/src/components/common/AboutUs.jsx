import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl flex justify-around items-center py-4 px-8">
          {/* Left side: Logo */}
          <h1 className="text-lg font-bold text-[#235782] flex items-center space-x-2">
            <span className="inline-block bg-blue-100 text-[#235782] p-2 rounded-full">
              🛡️
            </span>
            <span className="font-bold text-2xl">PrepPath</span>
          </h1>

          {/* Right side: Nav links */}
          <nav className="flex items-center space-x-6 ml-auto -mx-56">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#235782]"
            >
              Home
            </Link>
            <Link
              to="/ContactUs"
              className="text-gray-700 hover:text-[#235782]"
            >
              Contact Us
            </Link>
            <Link to="/Login">
              <button className="bg-[#235782] text-white px-5 py-2 rounded-md hover:bg-[#1d476a] hover:cursor-pointer">
                Login
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-[#235782] mb-4">About PrepPath</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering students with career-oriented training, internship opportunities, and personalized placement guidance to help them achieve their professional goals.
        </p>
      </section>

      {/* About Content Section */}
      <section className="flex justify-center items-center flex-1 px-6 pb-16">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-8">
          {/* Mission */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-[#235782] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to bridge the gap between education and employment by providing students with
              the tools and exposure they need to enter the corporate world confidently. We focus on connecting
              learners with real-world opportunities and guiding them through structured placement preparation.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-[#235782] mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We envision a platform where every student has access to quality training, mentorship, and job
              opportunities—helping them take the next step toward a fulfilling and impactful career.
            </p>
          </div>

          {/* Who We Are */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-[#235782] mb-3">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed">
              PrepPath is a collaborative initiative created by educators, industry experts, and developers
              who believe in a skill-based, guided approach to career growth. Our platform brings together
              training programs, internships, and placement insights under one unified system.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-[#235782] mb-3">
              What We Offer
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Job and internship listings across various domains</li>
              <li>Comprehensive placement preparation roadmaps</li>
              <li>Guided learning paths and mock interviews</li>
              <li>Career counseling and mentorship sessions</li>
              <li>Networking opportunities with recruiters and peers</li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#235782] mb-3">
              Join Our Community
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Join a growing community of students and professionals who are preparing for success. Whether
              you're looking to land your first internship or your dream job, PrepPath is here to support
              you every step of the way.
            </p>
          </div>
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
