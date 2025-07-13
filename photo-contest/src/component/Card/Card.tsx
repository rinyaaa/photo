import style from "./Card.module.css";
import { img } from "./ditail";

const handleShowPhoto = () => {
  // This function can be used to handle photo click events
  // For example, you can open a modal or navigate to a detailed view
  console.log("Photo clicked");
};

export const Card = () => {
  return (
    <>
      <div className={style.card}>
        {img.map((item, index) => (
          <div key={index} className={style.cardItem} onClick={handleShowPhoto}>
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
    </>
  );
};
