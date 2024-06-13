import React from 'react';

const WasteToCollect = () => {
  return (
    <section className="mb-6 md:mb-0 md:col-span-0">
      <h2 className="text-2xl font-bold mb-4">Waste To Collect</h2>
      <div className="grid grid-cols-1 md:grid-cols-0 gap-4">
        <div className="flex justify-between items-center bg-blue-200 h-4 rounded">
          <span className="px-2 py-1">Category 1</span>
        </div>
        <div className="flex justify-between items-center bg-blue-400 h-4 rounded">
          <span className="px-2 py-1">Category 2</span>
        </div>
        <div className="flex justify-between items-center bg-blue-600 h-4 rounded">
          <span className="px-2 py-1">Category 3</span>
        </div>
      </div>
    </section>
  );
};

export default WasteToCollect;
