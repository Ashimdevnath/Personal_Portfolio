import React from 'react';
import videoImage from '../assets/image/VideoImage.jpeg'; // Replace with your actual image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const ImageSection = () => {
  return (
    <section className="relative h-[70vh] max-h-[600px] overflow-hidden">
      <img src={videoImage} alt="Video" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <button className="bg-[#FB6542] text-white rounded-full hover:bg-[#d94625] mb-4 flex items-center justify-center w-16 h-16">
          <FontAwesomeIcon icon={faPlay} size="2x" />
        </button>
        <h2 className="text-3xl font-bold mb-4">Workflow Efficiency</h2>
        <p className="text-lg text-center">
        Streamlining processes is crucial for maximizing productivity.
        </p>
      </div>
    </section>
  );
};

export default ImageSection;
