// src/components/FileUploader.js
import React from 'react';

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onFileUpload(file);
    } else {
      alert('Please select an image file');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 w-full"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
      >
        Upload Image
      </button>
    </div>
  );
};

export default FileUploader;
