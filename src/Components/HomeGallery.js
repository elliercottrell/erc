import { Link } from "react-router-dom";
import "./Gallery.css";

function HomeGallery() {
  const homeGalleryImages = [
    {
      img: "Images/model/Self portrait of someone else.jpeg",
      link: "work",
    },
    {
      img: "Images/model/tim2.jpeg",
      link: "work",
    },
    {
      img: "Images/model/Marble.jpg",
    },
    {
      img: "Images/amsterdam/breakfast with flowers.jpeg",
      link: "amsterdam",
    },
    {
      img: "Images/model/untitled.png",
      link: "work",
    },

    {
      img: "Images/model/tim.jpeg",
      link: "work",
    },
    {
      img: "Images/model/boy.jpeg",
      link: "work",
    },
    {
      img: "Images/model/miumiu.jpeg",
      link: "work",
    },
    {
      img: "Images/print/print_2.png",
      link: "print",
    },
    {
      img: "Images/model/minju1.jpeg",
      link: "work",
    },
    {
      img: "Images/morocco/morocco_11.png",
      link: "morocco",
    },
    {
      img: "Images/model/friday.jpeg",
      link: "work",
    },
    {
      img: "Images/amsterdam/girl and a croton.jpeg",
      link: "amsterdam",
    },
    {
      img: "Images/model/I bore myself telling these stories.jpeg",
      link: "work",
    },
    {
      img: "Images/amsterdam/them drawing with a conversation and a plant.jpeg",
      link: "amsterdam",
    },
    {
      img: "Images/morocco/morocco_3.png",
      link: "morocco",
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
