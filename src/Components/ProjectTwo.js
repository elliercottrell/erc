import Gallery from "./Gallery";
import "./ProjectTwo.css";

function ProjectTwo() {
  const galleryImagesTwo = [
    {
      img: "Images/model/atOnceTwoThings.jpeg",
      title: "At Once, Two Things",
    },
    {
      img: "Images/model/inPower.jpg",
      title: "Wilding",
    },
    {
      img: "Images/model/untitled.png",
      title: "Untitled",
    },
    {
      img: "Images/model/TimMauricio.jpg",
      title: "Tim/Mauricio",
    },
    {
      img: "Images/model/timsofa.jpeg",
      title: "A portrait of Tim, surrounded by the sofa",
    },
    {
      img: "Images/model/Self portrait of someone else.jpeg",
      title: "Self Portrait of Someone Else",
    },
    {
      img: "Images/model/RUD.jpeg",
      title: "Rapid, Unscheduled, Disassembly",
    },
    {
      img: "Images/model/how to eat the sun.jpeg",
      title: "How To Eat The Sun",
    },
    {
      img: "Images/model/intothesun.jpeg",
      title: "Into The Sun I",
    },
    {
      img: "Images/model/intothesuntwo.jpg",
      title: "Into The Sun II",
    },
    {
      img: "Images/model/Marble.jpg",
      title: "Marble",
    },
    {
      img: "Images/model/timpink.jpeg",
      title: "Pink, Tim",
    },
    {
      img: "Images/model/miumiutwo.jpeg",
      title: "Untitled",
    },
    {
      img: "Images/model/onthegrass.jpeg",
      title: "On The Grass",
    },
    {
      img: "Images/model/onfriday.jpeg",
      title: "On Friday",
    },
    {
      img: "Images/model/girlonherside.jpeg",
      title: "On The Side",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
    </div>
  );
}

export default ProjectTwo;
