import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/model/tim2.jpeg",
    },
    {
      img: "Images/model/I bore myself telling these stories.jpeg",
    },
    {
      img: "Images/model/friday.jpeg",
    },
    {
      img: "Images/model/minju1.jpeg",
    },
    {
      img: "Images/model/Self portrait of someone else.jpeg",
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
    {
      img: "Images/model/untitled.png",
    },
    {
      img: "Images/model/self.jpeg",
    },
    {
      img: "Images/model/minju2.jpeg",
    },
    {
      img: "Images/model/boy.jpeg",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
