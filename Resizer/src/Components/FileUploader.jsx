import React from 'react';

function FileUploader({ onFileUpload }) {
  const handleFileChange = (e) => {
    onFileUpload(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label className="block mb-4 text-lg font-medium text-white">
        Upload your image
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="file:mr-4 file:py-4 file:px-8 file:rounded-2xl hover:cursor-pointer file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
    </div>
  );
}

export default FileUploader;
