import { useState } from "react";
import style from "./Card.module.css";
import { img } from "./ditail";

export const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleShowPhoto = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? img.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === img.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className={style.card}>
        {img.map((item, index) => (
          <div
            key={index}
            className={style.cardItem}
            onClick={() => handleShowPhoto(index)}
          >
            <div className={style.cardTitle}>
              <p className={style.number}>{index + 1}</p>
              <p className={style.title}>{item.title}</p>
            </div>
            <img
              src={item.img}
              alt={`Image ${index + 1}`}
              className={style.cardImage}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={style.modal} onClick={handleCloseModal} tabIndex={0}>
          <div
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={style.closeButton} onClick={handleCloseModal}>
              ×
            </button>

            <button className={style.prevButton} onClick={handlePreviousImage}>
              ←
            </button>

            <div className={style.imageContainer}>
              <img
                src={img[currentImageIndex].img}
                alt={img[currentImageIndex].title}
                className={style.modalImage}
              />
              <div className={style.imageInfo}>
                <h3>{img[currentImageIndex].title}</h3>
                <p>{img[currentImageIndex].detail}</p>
              </div>
            </div>

            <button className={style.nextButton} onClick={handleNextImage}>
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};
