import React from 'react';
import portfolioImage1 from '../assets/image/portfolio_1.png'; // Replace with your actual image path
// Replace with your actual image path

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">My Portfolio</h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4">
            <img src={portfolioImage1} alt="Portfolio 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2"> <a className='' href='https://ashimdevnath.github.io/Weather_Application/' target='_blank'>Weather Application</a></h3>
              <p className="text-gray-600">In this application it will provide you dynamic data as we search the city name and it will provide you humidity level , Wind Speed , Degree Celsius</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4">
            <img src={portfolioImage1} alt="Portfolio 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Women In Action</h3>
              <p className="text-gray-600">We work towards ensuring a life free from inequality and discrimination for every woman.</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4">
            <img src={portfolioImage1} alt="Portfolio 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hello, I'm Brian</h3>
              <p className="text-gray-600">I'm a Freelance Copywriter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
