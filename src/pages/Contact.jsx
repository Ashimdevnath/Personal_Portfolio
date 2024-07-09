import React from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'; // Import icons from react-icons
import { IconContext } from 'react-icons'; // Import IconContext for styling icons

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (placeholder for now)
    // For simplicity, just showing a success message
    alert("Ashim will respond as quickly as possible.");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>
      </header>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Box 1: Phone Number */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex items-center justify-center flex-col">
          <IconContext.Provider value={{ color: '#d94625', size: '1.5rem' }}>
            <FiPhone />
          </IconContext.Provider>
          <h2 className="mt-4 text-gray-800 text-center font-bold text-sm md:text-lg">+91 9574449365</h2>
          <h2 className="text-gray-600 text-center text-xs md:text-sm mt-3">Monday - Friday from 7am - 5pm</h2>
        </div>

        {/* Box 2: Address */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex items-center justify-center flex-col">
          <IconContext.Provider value={{ color: '#d94625', size: '1.5rem' }}>
            <FiMapPin />
          </IconContext.Provider>
          <h2 className="mt-4 text-gray-800 text-center font-bold text-sm md:text-lg">Sachim, Surat, Gujarat</h2>
          <h2 className="text-gray-600 text-center text-xs md:text-sm mt-3">1524, Ashapuri Society G.H.B Kanakpur Sachin Gujarat India</h2>
        </div>

        {/* Box 3: Email */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex items-center justify-center flex-col">
          <IconContext.Provider value={{ color: '#d94625', size: '1.5rem' }}>
            <FiMail />
          </IconContext.Provider>
          <h2 className="mt-4 text-gray-800 text-center font-bold text-sm md:text-lg"><a href="mailto:ashimdevnat7261@gmail.com">ashimdevnat7261@gmail.com</a></h2>
          <h2 className="text-gray-600 text-center text-xs md:text-sm mt-3">Contact me any time</h2>
        </div>
      </section>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Get in Touch Section */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 md:col-span-2">
          <h1 className="text-2xl font-bold mb-2">Get in Touch</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input type="text" id="name" name="name" required className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input type="email" id="email" name="email" required className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
              <textarea id="message" name="message" rows="4" required className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#d94625] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="h-16"></div> {/* Adding extra space at the bottom */}
    </div>
  );
};

export default Contact;
