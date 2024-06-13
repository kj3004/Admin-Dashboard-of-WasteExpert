// AddNewAdminCard.js
import React from 'react';

const AddNewCollectorCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Icon */}
      <div className="px-6 py-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-2 0v-6H3a1 1 0 0 1 0-2h6V3a1 1 0 0 1 1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Title and Description */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Add New Collector</div>
        <p className="text-gray-700 text-base text-center">
          Click the button below to add a new Collector.
        </p>
      </div>

      {/* Action Button */}
      <div className="px-6 py-4 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add Collector
        </button>
      </div>
    </div>
  );
};

export default AddNewCollectorCard;
