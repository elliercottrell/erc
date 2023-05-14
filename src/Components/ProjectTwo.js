import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/model/model_1.png",
    },
    {
      img: "Images/model/model_2.png",
    },
    {
      img: "Images/model/model_3.png",
    },
    {
      img: "Images/model/model_4.png",
    },
    {
      img: "Images/model/model_5.png",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
