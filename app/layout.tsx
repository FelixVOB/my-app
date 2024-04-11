// Assuming this is a Next.js component with client-side interactivity.
"use client";
import '../styles/globals.css';
import { useState } from 'react';

const Gallery: React.FC = () => {
  // State to keep track of the selected image source
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
// Your images array remains the same
const images = [
  "https://images.unsplash.com/photo-1668937642482-f84271bfa5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668954206766-404e981f57f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668891720406-947defa2e234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668954215479-d672769a16e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668896317909-34ad725c4d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668934805187-359213a84c9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668929484162-7e65c648199a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668937642482-f84271bfa5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668954206766-404e981f57f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668891720406-947defa2e234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668954215479-d672769a16e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668896317909-34ad725c4d97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668934805187-359213a84c9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1668929484162-7e65c648199a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
];


  // Function to handle image selection
  const handleImageClick = (imageSrc: string) => {
    console.log("handleImageClick")
    setSelectedImage(imageSrc);
  };

  // Function to close the selected image view
  const handleCloseClick = () => {
    console.log("handleCloseClick")
    setSelectedImage(null);
  };

  // Function to render each image in the gallery
  const renderImage = (imageSrc: string, index: number) => (
    <img key={index} src={imageSrc} alt="" onClick={() => handleImageClick(imageSrc)} />
  );

  return (
    <div>
      {selectedImage && (
        <div className="view-image" onClick={handleCloseClick}>
          <img src={selectedImage} alt="Selected" />
          <span>X</span>
        </div>
      )}

      <div className="image-container">
        {images.map(renderImage)}
      </div>
    </div>
  );
};

export default Gallery;