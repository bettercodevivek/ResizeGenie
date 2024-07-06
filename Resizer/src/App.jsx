import React, { useState} from 'react';
import ImageResizer from './Components/ImageResizer';
import FileUploader from './Components/FileUploader';

function App() {
  const [uploadedFile,setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(URL.createObjectURL(file));
  };

  return (
    <div  className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-semibold mb-4 absolute top-12">Social Media Image Resizer</h1>
      {!uploadedFile ? (
        <FileUploader onFileUpload={handleFileUpload} />
      ) : (
        <ImageResizer imageUrl={uploadedFile} />
      )}
    </div>
  );
}

export default App;
