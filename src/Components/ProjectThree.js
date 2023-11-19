import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectThree() {
  const galleryImages = [
    {
      img: "Images/amsterdam/girl and a croton.jpeg",
    },
    {
      img: "Images/amsterdam/two girls on the metro from Sloterdijk.jpeg",
    },
    {
      img: "Images/amsterdam/breakfast with flowers.jpeg",
    },
    {
      img: "Images/amsterdam/them drawing with a conversation and a plant.jpeg",
    },
    {
      img: "Images/amsterdam/Cake.jpeg",
    },
    {
      img: "Images/amsterdam/strangers on the tram in the rain.jpeg",
    },
    {
      img: "Images/amsterdam/Dollar Pizza Facetime.jpeg",
    },
    {
      img: "Images/amsterdam/Kessens.jpeg",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectThree;
