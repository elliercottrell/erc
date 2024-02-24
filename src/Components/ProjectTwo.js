import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/model/Self portrait of someone else.jpeg",
    },
    {
      img: "Images/model/Marble.jpg",
    },
    {
      img: "Images/model/untitled.png",
    },
    {
      img: "Images/model/intothesun.jpeg",
    },
    {
      img: "Images/model/theboy.jpeg",
    },
    {
      img: "Images/model/girlonherside.jpeg",
    },
    {
      img: "Images/model/timsofa.jpeg",
      title: "Tim",
    },
    {
      img: "Images/model/onfriday.jpeg",
    },
    {
      img: "Images/model/onthegrass.jpeg",
    },
    {
      img: "Images/model/miumiutwo.jpeg",
    },
    {
      img: "Images/model/timpink.jpeg",
    },
    {
      img: "Images/model/miumiuone.jpeg",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
