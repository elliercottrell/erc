import Gallery from "./Gallery";
import "./ProjectTwo.css";
import { Link } from "react-router-dom";

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
      img: "Images/model/miumiutwo.jpeg",
      title: "Amongst",
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
      img: "Images/model/living inside.jpeg",
      title: "Living inside",
    },
    {
      img: "Images/model/Self portrait of someone else.jpeg",
      title: "Self Portrait of Someone Else",
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
      img: "Images/model/TimMauricio.jpg",
      title: "Tim/Mauricio",
    },
    {
      img: "Images/model/timsofa.jpeg",
      title: "A portrait of Tim, surrounded by the sofa",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={galleryImagesTwo} />
      <Link to="/substack" className="linkSubstack">
        <h2 className="subTitle">Substack</h2>
      </Link>
    </div>
  );
}

export default ProjectTwo;
