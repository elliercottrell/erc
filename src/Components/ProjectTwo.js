import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/model/walk.jpeg",
    },
    {
      img: "Images/model/moonlake.jpeg",
    },
    {
      img: "Images/model/friday.jpeg",
    },
    {
      img: "Images/model/minju1.jpeg",
    },
    {
      img: "Images/model/tim2.jpeg",
    },
    {
      img: "Images/model/miumiu.jpeg",
    },
    {
      img: "Images/model/miu.jpeg",
    },
    {
      img: "Images/model/tim.jpeg",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
