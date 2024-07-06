import React, { useState } from 'react';
import ImageResizer from './Components/ImageResizer';
import FileUploader from './Components/FileUploader';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-6 tracking-wider">
        Social Media Image Resizer
      </h1>
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md">
        {!uploadedFile ? (
          <FileUploader onFileUpload={handleFileUpload} />
        ) : (
          <ImageResizer imageUrl={uploadedFile} />
        )}
      </div>
    </div>
  );
}

export default App;
