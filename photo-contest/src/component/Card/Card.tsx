import style from "./Card.module.css";
import img1 from "../../assets/Img-1.jpeg";
import img2 from "../../assets/Img-2.jpeg";

const img = [
  {
    img: img1,
    title: "ねこ",
    detail: "ねこ",
    day: "6/20",
  },
  {
    img: img2,
    title: "施しを受ける者",
    detail:
      "あまりにも哀愁漂う矢部大智の姿を見て撮影しました。その姿はまるで数週間何も食べずに街をさまよい歩きやっとありついた飯に喰らいつく野良犬のようでした。美しい夕焼けとのコントラストによりさらに悲壮感が溢れています。",
    day: "シス研のBBQ",
  },
  {
    img: img2,
    title: "施しを受ける者",
    detail:
      "あまりにも哀愁漂う矢部大智の姿を見て撮影しました。その姿はまるで数週間何も食べずに街をさまよい歩きやっとありついた飯に喰らいつく野良犬のようでした。美しい夕焼けとのコントラストによりさらに悲壮感が溢れています。",
    day: "シス研のBBQ",
  },
  {
    img: img2,
    title: "施しを受ける者",
    detail:
      "あまりにも哀愁漂う矢部大智の姿を見て撮影しました。その姿はまるで数週間何も食べずに街をさまよい歩きやっとありついた飯に喰らいつく野良犬のようでした。美しい夕焼けとのコントラストによりさらに悲壮感が溢れています。",
    day: "シス研のBBQ",
  },
];

export const Card = () => {
  return (
    <>
      <div className={style.card}>
        {img.map((item, index) => (
          <div key={index} className={style.cardItem}>
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
