import Gallery from "./Gallery";
import "./Drawing.css";

function Drawing() {
  const drawingGalleryImages = [
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
      title: "Living Inside out",
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
      <Gallery galleryImages={drawingGalleryImages} />
    </div>
  );
}

export default Drawing;