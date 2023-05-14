import { Link } from "react-router-dom";
import "./Gallery.css";

function HomeGallery() {
  const homeGalleryImages = [
    {
      img: "Images/morocco/morocco_1.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_2.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_3.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_4.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_5.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_6.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_7.png",
      link: "pjt",
    },

    {
      img: "Images/morocco/morocco_8.png",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_9.png",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_10.png",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_11.png",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_12.png",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_13.png",
      link: "pjth",
    },
    {
      img: "Images/morocco/morocco_14.png",
      link: "pjth",
    },
    {
      img: "Images/morocco/morocco_15.png",
      link: "pjth",
    },
    {
      img: "Images/morocco/morocco_16.png",
      link: "pjth",
    },
    {
      img: "Images/morocco/morocco_17.png",
      link: "pjth",
    },
    {
      img: "Images/morocco/morocco_18.png",
      link: "pjth",
    },
    {
      img: "Images/morocco/morocco_19.png",
      link: "pjth",
    },
    {
      img: "Images/morocco/morocco_20.png",
      link: "pjth",
    },
    {
      img: "Images/morocco/morocco_21.png",
      link: "pjf",
    },
    {
      img: "Images/morocco/morocco_22.png",
      link: "pjf",
    },
    {
      img: "Images/morocco/morocco_23.png",
      link: "pjf",
    },
    {
      img: "Images/morocco/morocco_24.png",
      link: "pjf",
    },
    {
      img: "Images/morocco/morocco_25.png",
      link: "pjf",
    },
    {
      img: "Images/morocco/morocco_26.png",
      link: "pjf",
    },
    {
      img: "Images/morocco/morocco_27.png",
      link: "pjf",
    },
    {
      img: "Images/morocco/morocco_28.png",
      link: "pjf",
    },
    {
      img: "Images/model/model_1.png",
      link: "pjf",
    },
    {
      img: "Images/model/model_2.png",
      link: "pjf",
    },
    {
      img: "Images/model/model_3.png",
      link: "pjf",
    },
    {
      img: "Images/model/model_4.png",
      link: "pjf",
    },
    {
      img: "Images/model/model_5.png",
      link: "pjfi",
    },
    {
      img: "Images/model/model_6.png",
      link: "pjfi",
    },
    {
      img: "Images/model/model_7.png",
      link: "pjfi",
    },
    {
      img: "Images/p5_4.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_5.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_6.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_7.jpg",
      link: "pjfi",
    },
    {
      img: "Images/p5_8.jpg",
      link: "pjfi",
    },
  ];

  return (
    <div className="App">
      <div className="imageWrap">
        {homeGalleryImages &&
          homeGalleryImages.map((image, index) => {
            return (
              <div className="single" key={index}>
                <Link to={image.link}>
                  <img src={image.img} alt="" />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomeGallery;
