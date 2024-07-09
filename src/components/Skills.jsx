import React from 'react';
import { FaShareAlt, FaBrain } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Services I Know</h2>
        <div className="flex flex-wrap justify-center">
          {/* Skill Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
            <div className="text-[#FB6542] mb-4">
              <svg className="w-12 h-12 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21h-8m8 0l-2-2m2 2l-2-2m2 2l-7-7-5 5-3-3-2 2-4-4 2-2-2-2 2-2-2-2-3 3-3-3 6-6 5 5 2-2 3 3 2-2 4 4-2 2 2 2-2 2 2 2 8-8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development</h3>
            <p className="text-gray-600">Building modern and responsive web applications using latest technologies.</p>
          </div>
          
          
          {/* Add more skill boxes here */}
          <div className="flex flex-wrap justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
        <div className="text-[#FB6542] mb-4">
          <FaShareAlt className="w-12 h-12 mx-auto mb-4" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Social Media Management</h3>
        <p className="text-gray-600">Creating, curating, and managing content across social media platforms to enhance online presence and engagement.</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
        <div className="text-[#FB6542] mb-4">
          <FaBrain className="w-12 h-12 mx-auto mb-4" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Deep Learning</h3>
        <p className="text-gray-600">Exploring deep learning concepts in coding, focusing on building intelligent systems.</p>
      </div>
    </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;