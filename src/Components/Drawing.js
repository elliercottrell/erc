import Gallery from "./Gallery";
import "./Drawing.css";

function Drawing() {
  const drawingGalleryImages = [
    {
      img: "Images/model/atOnceTwoThings.jpeg",
      title: "At Once, Two Things",
    },
    {
      img: "Images/model/Demaphon falls, in the grass.jpg",
      title: "Apollo falls, in the grass",
    },
    {
      img: "Images/model/wildMultiplicity.jpeg",
      title: "Wild Multiplicity",
    },
    {
      img: "Images/model/whereUndineLastWasSeen.jpg",
      title: "Where Undine Last Was Seen",
    },

    {
      img: "Images/model/timsofa.jpeg",
      title: "A portrait of Tim, surrounded by the sofa",
    },
    {
      img: "Images/model/how to eat the sun.jpeg",
      title: "How To Eat The Sun",
    },
    {
      img: "Images/model/livingInsideOutWeb.jpeg",
      title: "Living Inside Out",
    },

    {
      img: "Images/model/intothesun.jpeg",
      title: "Into The Sun I",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={drawingGalleryImages} />
    </div>
  );
}

export default Drawing;
