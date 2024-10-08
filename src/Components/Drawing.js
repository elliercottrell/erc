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
      img: "Images/model/intothesun.jpeg",
      title: "Into The Sun I",
    },
    {
      img: "Images/model/timsofa.jpeg",
      title: "A portrait of Tim, surrounded by the sofa",
    },
    {
      img: "Images/model/how to eat the sun.jpeg",
      title: "How To Eat The Sun",
    },
    {
      img: "Images/model/living_inside_out.jpeg",
      title: "Living Inside Out",
    },
    {
      img: "Images/model/Self portrait of someone else.jpeg",
      title: "Self Portrait of Someone Else",
    },
  ];

  return (
    <div className="ProjTwo">
      <Gallery galleryImages={drawingGalleryImages} />
    </div>
  );
}

export default Drawing;
