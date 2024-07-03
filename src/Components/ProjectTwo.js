import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/model/At Once Two Things.jpg",
    },
    {
      img: "Images/model/IMG_7542.jpg",
    },
    {
      img: "Images/model/miumiutwo.jpeg",
    },
    {
      img: "Images/model/miumiuone.jpeg",
    },
    {
      img: "Images/model/Self portrait of someone else.jpeg",
    },
    {
      img: "Images/model/RUD.jpeg",
    },
    {
      img: "Images/model/how to eat the sun.jpeg",
    },
    {
      img: "Images/model/timsofa.jpeg",
      title: "A portrait of Tim, surrounded by the sofa",
    },
    {
      img: "Images/model/untitled.png",
    },
    {
      img: "Images/model/intothesuntwo.jpg",
    },
    {
      img: "Images/model/intothesun.jpeg",
    },
    {
      img: "Images/model/onthegrass.jpeg",
    },
    {
      img: "Images/model/onfriday.jpeg",
    },
    {
      img: "Images/model/timpink.jpeg",
    },
    {
      img: "Images/model/Marble.jpg",
    },
    {
      img: "Images/model/theboy.jpeg",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
