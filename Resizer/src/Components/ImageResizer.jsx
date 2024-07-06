import React, { useState } from 'react';

const platformDimensions = {
  InstagramPost: { width: 1080, height: 1080 },
  InstagramStory: { width: 1080, height: 1920 },
  FacebookCover: { width: 820, height: 312 },
  FacebookProfile: { width: 180, height: 180 },
  TwitterHeader: { width: 1500, height: 500 },
  TwitterProfile: { width: 400, height: 400 },
  LinkedInBanner: { width: 1584, height: 396 },
  LinkedInProfile: { width: 400, height: 400 },
  PinterestPin: { width: 1000, height: 1500 },
  YouTubeThumbnail: { width: 1280, height: 720 },
  TikTokVideoCover: { width: 1080, height: 1920 },
  SnapchatAd: { width: 1080, height: 1920 },
  EtsyThumbnail: { width: 570, height: 456 },
  WhatsAppStatus: { width: 1080, height: 1920 },
  TwitchProfileBanner: { width: 1920, height: 480 },
};

const ImageResizer = ({ imageUrl }) => {
  const [resizedImageUrl, setResizedImageUrl] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const resizeImage = () => {
    if (!selectedPlatform) {
      alert('Please select a platform');
      return;
    }

    const { width, height } = platformDimensions[selectedPlatform];
    const canvas = document.createElement('canvas');
    const img = new Image();

    img.src = imageUrl;
    img.onload = () => {
      const ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      setResizedImageUrl(canvas.toDataURL('image/jpeg'));
    };
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <img src={imageUrl} alt="Original" className="mb-4 w-full h-auto rounded-lg" />
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Platform:</label>
        <select
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="">-- Choose Platform --</option>
          {Object.keys(platformDimensions).map((platform) => (
            <option key={platform} value={platform}>
              {platform.replace(/([A-Z])/g, ' $1').trim()}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={resizeImage}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
      >
        Resize Image
      </button>
      {resizedImageUrl && (
        <div className="mt-4">
          <img src={resizedImageUrl} alt="Resized" className="rounded-lg mb-2 w-full h-auto" />
          <a
            href={resizedImageUrl}
            download="resized-image.jpg"
            className="block text-blue-500 hover:underline text-center mt-2"
          >
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageResizer;
