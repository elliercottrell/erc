import Gallery from "./Gallery";
import "./Drawing.css";

function Drawing() {
  const drawingGalleryImages = [
    {
      img: "Images/model/wildMultiplicity.jpeg",
      title: "Wild Multiplicity",
    },
    {
      img: "Images/model/how to eat the sun.jpeg",
      title: "How To Eat The Sun",
    },
    {
      img: "Images/model/whereUndineLastWasSeen.jpg",
      title: "Where Undine Last Was Seen",
    },
    {
      img: "Images/model/livingInsideOutWeb.jpeg",
      title: "Living Inside Out",
    },

    {
      img: "Images/model/otherwiseWeAreLost.jpg",
      title: "The Rite of Spring: Otherwise We Are Lost",
    },
    {
      img: "Images/model/inWhatMovesThem.jpg",
      title: "The Rite of Spring: In What Moves Them",
    },
    {
      img: "Images/model/apolloFallsInTheGrass.jpeg",
      title: "Apollo Falls, In The Grass",
    },
    {
      img: "Images/model/lifeStill.jpeg",
      title: "Life, Still",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={drawingGalleryImages} />
    </div>
  );
}

export default Drawing;
