import { useState } from "react";
import "./Gallery.css";

const Gallery = ({ galleryImages }) => {
  const [imageNumber, setImageNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setImageNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {openModal && (
        <div className="largeImageWrap">
          <div className="fullScreenImage" onClick={handleCloseModal}>
            <img src={galleryImages[imageNumber].img} alt="A portrait of Tim" />
          </div>
        </div>
      )}

      <div className="imageWrap">
        {galleryImages &&
          galleryImages.map((image, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={image.img} alt="Tim" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
