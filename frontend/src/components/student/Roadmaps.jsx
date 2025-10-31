import React from "react";
import { HiOutlineBookmark, HiOutlineDocumentDownload } from "react-icons/hi";

export default function Roadmaps() {
  // ✅ PDF links now point to public/roadmaps/
  const roadmapLinks = {
    "Frontend": "/roadmaps/frontend.pdf",
    "Backend": "/roadmaps/backend.pdf",
    "Full Stack": "/roadmaps/full-stack.pdf",
    "DevOps": "/roadmaps/devops.pdf",
    "Data Analyst": "/roadmaps/data-analyst.pdf",
    "AI Engineer": "/roadmaps/ai-engineer.pdf",
    "Machine Learning": "/roadmaps/machine-learning.pdf",
  };

  const roadmapList = [
    "Frontend", "Backend", "Full Stack",
    "DevOps", "Data Analyst", "AI Engineer",
    "AI and Data Scientist", "Data Engineer", "Android",
    "Machine Learning", "PostgreSQL", "iOS",
    "Blockchain", "QA", "Software Architect",
    "Cyber Security", "UX Design", "Technical Writer",
    "Game Developer", "Server Side Game Developer", "MLOps",
    "Product Manager", "Engineering Manager", "Developer Relations",
    "BI Analyst"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#235782]">
        Roadmaps
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {roadmapList.map((item, index) => {
          const pdfLink = roadmapLinks[item];
          return (
            <div
              key={index}
              className={`flex justify-between items-center p-4 rounded-xl shadow-md transition-all duration-200 ${
                pdfLink
                  ? "bg-[#3C89C9] hover:bg-[#235782] text-white cursor-pointer"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              <span className="font-semibold">{item}</span>
              {pdfLink ? (
                <a href={pdfLink} download title="Download PDF">
                  <HiOutlineDocumentDownload size={22} className="hover:text-gray-200" />
                </a>
              ) : (
                <HiOutlineBookmark size={20} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
