import './Historia.css';
import React, { useState, useRef } from 'react';


const images = [
  { src: "https://phantom-marca.unidadeditorial.es/836d4a9e5976318bde3e9f8c0f666f21/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/21/16716506561096.jpg", description: "Descripción de la imagen 1" },
  { src: "https://pbs.twimg.com/media/ECWq8UmW4AAkeUg.jpg", description: "Descripción de la imagen 2" },
  { src: "https://pbs.twimg.com/media/ECWq8UmW4AAkeUg.jpg", description: "Descripción de la imagen 2" },
  { src: "https://pbs.twimg.com/media/ECWq8UmW4AAkeUg.jpg", description: "Descripción de la imagen 2" },
  { src: "https://pbs.twimg.com/media/ECWq8UmW4AAkeUg.jpg", description: "Descripción de la imagen 2" },
  { src: "https://pbs.twimg.com/media/ECWq8UmW4AAkeUg.jpg", description: "Descripción de la imagen 2" },
  { src: "./../", description: "Descripción de la imagen 2" },
  // Agrega más imágenes según necesites
];

const videos = [
  { id: "video1", src: "https://www.youtube.com/embed/kLUKUJxV_3A", description: "Descripción del video 1" },
  { id: "video2", src: "https://www.youtube.com/embed/kLUKUJxV_3A", description: "Descripción del video 2" },
  // Agrega más videos según necesites
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const selectedImageContainerRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    selectedImageContainerRef.current.scrollIntoView();
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Título de la Galería</h1>
      <p className="gallery-description">Pequeña descripción sobre la galería</p>

      <div className="selectedImageContainer" ref={selectedImageContainerRef}>
        {selectedImageIndex !== null && (
          <>
          <div className="imageWrapper">
            <img className="selectedImage" src={images[selectedImageIndex].src} alt={images[selectedImageIndex].description} />
            <button className="image-nav-button image-nav-prev" onClick={handlePrevImage}>&#10094;</button>
            <button className="image-nav-button image-nav-next" onClick={handleNextImage}>&#10095;</button>
            <p>{images[selectedImageIndex].description}</p>
          </div>
          </>
        )}
      </div>

      <div className="mini-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.description}
            className={`miniGalleryImage${index === selectedImageIndex ? " selected" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      <div className="video-section">
        <h2 className="video-title">Título de la Sección de Videos</h2>
        <div className="video-container">
      {videos.map((video, index) => (
        <div key={index}>
          <div className="embed-responsive">
            <iframe
              id={video.id}
              className="embed-responsive-item"
              src={video.src}
              allowFullScreen
              title={video.description}
            ></iframe>
          </div>
          <p className="video-description">{video.description}</p>
        </div>
      ))}
    </div>
  </div>
  <p className="conclusion">
    Este es un pequeño párrafo para cerrar la sección o agregar alguna
    conclusión.
  </p>
</div>
);
};

export default Gallery;