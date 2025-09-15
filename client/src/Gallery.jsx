import { useState } from "react";
import "./Gallery.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/pictures/image2.jpg",
    "/pictures/image3.jpg",
    "/pictures/image4.jpg",
    "/pictures/image5.jpg",
    "/pictures/image6.jpg",
    "/gallery/gallery10.webp",
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
    "/gallery/gallery9.jpg",
  ];

  // Function to handle image click
  function handleImageClick(image) {
    setSelectedImage(image);
  }

  // Function to handle closing the image
  function handleClose() {
    setSelectedImage(null);
  }

  return (
    <>
      <Menu />

      {/* GALLERY TITLE SECTION */}
      <section className="gallery-title-container container">
        <br />
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="gallery-title fw-light fw-bold">OUR GOOD MEMORIES</h1>
            <p className="gallery-description lead text-body-secondary">
            Explore a curated collection that encapsulates our cherished moments and experiences. Each image tells a story, reflecting the artistry and passion behind our creations. We invite you to delve into this visual journey that celebrates the essence of our shared memories.
            </p>
          </div>
        </div>
        <hr />
        <br />
      </section>

      {/* GALLERY IMAGES */}
      <div className="gallery-images-container container">
        <div className="row gallery-images-row justify-content-center">
          {images.map((image, index) => (
            <div className="col-sm-3 mb-1" key={index}> {/* 3 images per row */}
              <div className="gallery-image-card">
                <div className="gallery-image-card-body">
                  <img
                    src={image}
                    className="gallery-image-card-img"
                    alt={`image ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                    style={{ cursor: "pointer" }} // Change cursor on hover
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>

      {/* Display the selected image in a larger view */}
      {selectedImage && (
        <div className="gallery-overlay" onClick={handleClose}>
          <img src={selectedImage} alt="Selected" className="gallery-selected-image" />
        </div>
      )}

      <Footer />
    </>
  );
}

export default Gallery;