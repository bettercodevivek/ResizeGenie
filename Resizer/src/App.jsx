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
       <div className='absolute top-0 left-0 m-4 text-white flex flex-col items-left'>
      <h1 className=" text-2xl font-semibold">ResizeGenie</h1>
      <h2 className=" text-sm">Perfectly Fit Your Social Media Presence!</h2>
      </div>
      
      <div className='flex flex-col items-center'>
      <h1 className="text-4xl font-bold py-1 text-white tracking-wider animate-slideInDown">
        Image Resizer 
      </h1>
      <h2 className='py-4 text-white text-lg'>Now,Effortlessly resize images for every social media platform!</h2>
      </div>
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
