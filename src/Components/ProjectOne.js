import Gallery from "./Gallery";
import "./ProjectOne.css";

function ProjectOne() {
  const galleryImages = [
    {
      img: "Images/morocco/morocco_3.png",
    },
    {
      img: "Images/morocco/morocco_6.png",
    },
    {
      img: "Images/morocco/morocco_7.png",
    },
    {
      img: "Images/morocco/morocco_8.png",
    },
    {
      img: "Images/morocco/morocco_9.png",
    },
    {
      img: "Images/morocco/morocco_10.png",
    },
    {
      img: "Images/morocco/morocco_11.png",
    },
    {
      img: "Images/morocco/morocco_12.png",
    },
    {
      img: "Images/morocco/morocco_13.png",
    },
    {
      img: "Images/morocco/morocco_14.png",
    },
    {
      img: "Images/morocco/morocco_19.png",
    },
    {
      img: "Images/morocco/morocco_20.png",
    },
    {
      img: "Images/morocco/morocco_21.png",
    },
    {
      img: "Images/morocco/morocco_22.png",
    },
    {
      img: "Images/morocco/morocco_23.png",
    },
    {
      img: "Images/morocco/morocco_24.png",
    },
  ];

  return (
    <div className="ProjOne">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectOne;
