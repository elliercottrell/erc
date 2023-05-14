import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectThree() {
  const galleryImages = [
    {
      img: "Images/nature/nature_1.png",
    },
    {
      img: "Images/nature/nature_2.png",
    },
    {
      img: "Images/nature/nature_4.png",
    },
    {
      img: "Images/nature/nature_6.png",
    },
    {
      img: "Images/nature/nature_5.png",
    },
    {
      img: "Images/nature/nature_8.png",
    },
    {
      img: "Images/nature/nature_9.png",
    },
    {
      img: "Images/nature/nature_10.png",
    },
    {
      img: "Images/nature/nature_7.png",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectThree;
