import { Link } from "react-router-dom";
import "./Gallery.css";

function HomeGallery() {
  const homeGalleryImages = [
    {
      img: "Images/model/tim.jpeg",
      link: "work",
    },
    {
      img: "Images/morocco/morocco_19.png",
      link: "morocco",
    },
    {
      img: "Images/model/friday.jpeg",
      link: "work",
    },
    {
      img: "Images/amsterdam/breakfast with flowers.jpeg",
      link: "amsterdam",
    },
    {
      img: "Images/morocco/morocco_7.png",
      link: "morocco",
    },
    {
      img: "Images/morocco/morocco_20.png",
      link: "morocco",
    },
    {
      img: "Images/model/miu.jpeg",
      link: "work",
    },
    {
      img: "Images/morocco/morocco_6.png",
      link: "morocco",
    },
    {
      img: "Images/morocco/morocco_3.png",
      link: "morocco",
    },
    {
      img: "Images/morocco/morocco_9.png",
      link: "morocco",
    },
    {
      img: "Images/model/minju1.jpeg",
      link: "work",
    },
    {
      img: "Images/morocco/morocco_8.png",
      link: "morocco",
    },
    {
      img: "Images/morocco/morocco_14.png",
      link: "morocco",
    },
    {
      img: "Images/amsterdam/two girls on the metro from Sloterdijk.jpeg",
      link: "amsterdam",
    },
    {
      img: "Images/model/I bore myself telling these stories.jpeg",
      link: "work",
    },
    {
      img: "Images/model/miumiu.jpeg",
      link: "work",
    },
    {
      img: "Images/amsterdam/them drawing with a conversation and a plant.jpeg",
      link: "amsterdam",
    },
    {
      img: "Images/morocco/morocco_23.png",
      link: "morocco",
    },
    {
      img: "Images/amsterdam/girl and a croton.jpeg",
      link: "amsterdam",
    },
    {
      img: "Images/morocco/morocco_24.png",
      link: "morocco",
    },
    {
      img: "Images/morocco/morocco_21.png",
      link: "morocco",
    },
    {
      img: "Images/print/print_1.png",
      link: "print",
    },
    {
      img: "Images/morocco/morocco_11.png",
      link: "morocco",
    },
    {
      img: "Images/print/print_2.png",
      link: "print",
    },
    {
      img: "Images/morocco/morocco_13.png",
      link: "morocco",
    },
    {
      img: "Images/amsterdam/strangers on the tram in the rain.jpeg",
      link: "amsterdam",
    },
    {
      img: "Images/model/tim2.jpeg",
      link: "work",
    },
    {
      img: "Images/model/Self portrait of someone else.jpeg",
      link: "work",
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
