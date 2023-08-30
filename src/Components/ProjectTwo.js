import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/model/minju1.jpeg",
    },
    {
      img: "Images/model/tim.jpeg",
    },
    {
      img: "Images/model/friday.jpeg",
    },
    {
      img: "Images/model/moonlake.jpeg",
    },
    {
      img: "Images/model/walk.jpeg",
    },
    {
      img: "Images/model/minju2.jpeg",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
