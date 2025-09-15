import React, { useState } from "react";
import "./Dress.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Dress() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState("");

  const images = [
    
  ];

  // Function to handle image click
  function handleImageClick(image) {
    setSelectedImage(image.src);
    setSelectedDescription(image.description);
  }

  // Function to handle closing the image
  function handleClose() {
    setSelectedImage(null);
    setSelectedDescription("");
  }

  return (
    <>
      <Menu />
      <div className="dress-cover-container">
        <img
          src="/pictures/dressingOverlay.jpg"
          alt="Dressing Design Overlay"
          className="dress-background-image"
        />
        <div className="dress-design-overlay">
          <div className="dress-text-overlay">
            <h1 className="display-1 fw-bold">Designed for the Best Wearing</h1>
          </div>
        </div>
      </div>

      <div className="dress-album py-5">
        <div className="container">
          <hr />
          <br />

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {images.map((image, index) => (
              <div className="col" key={index}>
                <div 
                  className="dress-card shadow-sm" 
                  onClick={() => handleImageClick(image)} 
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="dress-card-img"
                    src={image.src}
                    alt={`Dress ${index + 1}`}
                    width="100%"
                    height="225"
                  />
                  <div className="dress-card-body">
                    <p className="dress-card-text">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display the selected image in a larger view */}
      {selectedImage && (
        <div className="dress-overlay-examples" onClick={handleClose}>
          <img src={selectedImage} alt="Selected" />
          <p className="dress-image-description">{selectedDescription}</p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Dress;