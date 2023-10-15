import { Link } from "react-router-dom";
import "./Gallery.css";

function HomeGallery() {
  const homeGalleryImages = [
    {
      img: "Images/model/tim.jpeg",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_19.png",
      link: "pjo",
    },
    {
      img: "Images/model/friday.jpeg",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_7.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_20.png",
      link: "pjo",
    },

    {
      img: "Images/morocco/morocco_6.png",
      link: "pjo",
    },
    {
      img: "Images/model/walk.jpeg",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_3.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_9.png",
      link: "pjo",
    },

    {
      img: "Images/model/minju1.jpeg",
      link: "pjt",
    },
    {
      img: "Images/model/miu.jpeg",
      link: "pjt",
    },

    {
      img: "Images/morocco/morocco_8.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_14.png",
      link: "pjo",
    },
    {
      img: "Images/model/miumiu.jpeg",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_23.png",
      link: "pjo",
    },

    {
      img: "Images/model/moonlake.jpeg",
      link: "pjt",
    },
    {
      img: "Images/morocco/morocco_24.png",
      link: "pjo",
    },
    {
      img: "Images/morocco/morocco_21.png",
      link: "pjo",
    },
    {
      img: "Images/print/print_1.png",
      link: "pjfi",
    },

    {
      img: "Images/morocco/morocco_11.png",
      link: "pjo",
    },
    {
      img: "Images/print/print_2.png",
      link: "pjfi",
    },

    {
      img: "Images/morocco/morocco_13.png",
      link: "pjo",
    },

    {
      img: "Images/morocco/morocco_12.png",
      link: "pjo",
    },
    {
      img: "Images/model/tim2.jpeg",
      link: "pjt",
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
