import React from "react";
import { Link } from "react-router-dom";

export default function TrainingPlacementPortal() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
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
                to="/AboutUs" 
                className="text-gray-700 hover:text-[#235782]">
              About Us
            </Link>
            <Link 
                to="/ContactUs"
                className="text-gray-700 hover:text-[#235782]">
              Contact Us
            </Link>
            <Link to="/Login">
              <button className="bg-[#235782] text-white px-5 py-2 rounded-md hover:bg-[#1d476a] hover:cursor-pointer  ">
                Login
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60')",
        }}
      >
        <div className="bg-gradient-to-b from-[#3C89C9] to-[#235782] bg-opacity-50 absolute inset-0"></div>
        <div className="relative text-center text-white max-w-2xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Gateway to a Brighter Future
          </h2>
          <p className="mb-6 text-lg">
            Explore potential job and internship opportunities and prepare for
            placements with expert-curated roadmaps.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#235782] mb-6">
            What We Offer
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to the premier online platform dedicated to empowering
            students through exposure to real-world opportunities and industry
            insights. We bridge the gap between aspiring professionals and top
            organizations by providing access to internships, jobs, and career
            guidance.
          </p>
          <p className="text-gray-600 mb-12 leading-relaxed">
            Our platform allows students to explore potential job and internship
            openings while helping them prepare for placements with step-by-step
            roadmaps, curated resources, and expert-driven advice. We’re here to
            guide you every step of the way toward your dream career.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <div className="text-[#235782] text-4xl mb-4">💼</div>
              <h4 className="font-semibold mb-2">
                Explore Job & Internship Opportunities
              </h4>
              <p className="text-sm text-gray-600">
                Browse a variety of openings across industries and find the best
                match for your goals.
              </p>
            </div>
            <div>
              <div className="text-[#235782] text-4xl mb-4">🗺️</div>
              <h4 className="font-semibold mb-2">
                Placement Preparation Roadmaps
              </h4>
              <p className="text-sm text-gray-600">
                Get guided pathways and resources designed to help you ace your
                placement journey.
              </p>
            </div>
            <div>
              <div className="text-[#235782] text-4xl mb-4">💡</div>
              <h4 className="font-semibold mb-2">
                Personalized Career Guidance
              </h4>
              <p className="text-sm text-gray-600">
                Access mentorship and insights from industry professionals to
                build your ideal career path.
              </p>
            </div>
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
