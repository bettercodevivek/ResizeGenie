import React, { useState, useEffect } from 'react';
import ImageResizer from './Components/ImageResizer';
import FileUploader from './Components/FileUploader';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on mount
  }, []);

  const handleFileUpload = (file) => {
    setUploadedFile(URL.createObjectURL(file));
  };

  return (
    <div className={`main-container min-h-screen flex flex-col items-center justify-center p-6 transition-opacity duration-1000 ease-in-out ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-4xl font-bold text-white mb-6 tracking-wider animate-slideInDown">
        Social Media Image Resizer
      </h1>
      <div className={`bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md transition-all duration-1000 ease-in-out ${animate ? 'transform scale-100' : 'transform scale-0'}`}>
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
