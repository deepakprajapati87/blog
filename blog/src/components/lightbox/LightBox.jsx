import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa";
import './LightBox.css';

const images = [
  { id: 1, src: "../../public/portfolio-1.jpg", title: "Project california", dec:"Web Development" },
  { id: 2, src: "../../public/portfolio-2.jpg", title: "Project california", dec:"Web Development" },
  { id: 3, src: "../../public/portfolio-3.jpg", title: "Project california", dec:"Web Development" },
  { id: 4, src: "../../public/portfolio-4.jpg", title: "Project california", dec:"Web Development" },
  { id: 5, src: "../../public/portfolio-5.jpg", title: "Project california", dec:"Web Development"},
  { id: 6, src: "../../public/portfolio-6.jpg", title: "Project california", dec:"Web Development" },
];

const PortfolioGallery = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = (index) => {
    setCurrentIndex(index);
    setCurrentImage(images[index].src);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex].src);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex].src);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {images.map((image, index) => (
          <div key={image.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="portfolio-item position-relative" onClick={() => handleShow(index)}>
              <img src={image.src} alt={image.title} className="img-fluid rounded" />
              <div className="overlay">
                <FaPlus className="plus-icon" />
                <h3 className="hover-text">{image.title}</h3>
                <p className="hover-text">{image.dec}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          <Button variant="danger" className="close-btn" onClick={handleClose}>
            <FaTimes />
          </Button>
          <img src={currentImage} alt="Preview" className="img-fluid rounded" />
          <div className="d-flex justify-content-between mt-3">
            <Button variant="dark" onClick={prevImage}>Previous</Button>
            <Button variant="dark" onClick={nextImage}>Next</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PortfolioGallery;
