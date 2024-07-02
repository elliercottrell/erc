import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/model/At Once Two Things.jpg",
      link: "work",
    },
    {
      img: "Images/model/IMG_7542.jpg",
      link: "work",
    },
    {
      img: "Images/model/miumiutwo.jpeg",
      link: "work",
    },
    {
      img: "Images/model/miumiuone.jpeg",
      link: "work",
    },
    {
      img: "Images/model/Self portrait of someone else.jpeg",
      link: "work",
    },
    {
      img: "Images/model/RUD.jpeg",
      link: "work",
    },
    {
      img: "Images/model/how to eat the sun.jpeg",
      link: "work",
    },
    {
      img: "Images/model/timsofa.jpeg",
      link: "work",
    },
    {
      img: "Images/model/untitled.png",
      link: "work",
    },
    {
      img: "Images/model/intothesuntwo.jpg",
    },
    {
      img: "Images/model/intothesun.jpeg",
      link: "work",
    },
    {
      img: "Images/model/onthegrass.jpeg",
      link: "work",
    },
    {
      img: "Images/model/onfriday.jpeg",
      link: "work",
    },
    {
      img: "Images/model/timpink.jpeg",
      link: "work",
    },
    {
      img: "Images/model/Marble.jpg",
      link: "work",
    },
    {
      img: "Images/model/theboy.jpeg",
      link: "work",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
