import Gallery from "./Gallery";
import "./ProjectFour.css";

function ProjectFour() {
  const galleryImages = [
    {
      img: "Images/portrait/portrait_1.png",
    },
    {
      img: "Images/portrait/portrait_5.png",
    },
    {
      img: "Images/portrait/portrait_3.png",
    },
    {
      img: "Images/portrait/portrait_4.png",
    },
  ];

  return (
    <div className="ProjFour">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectFour;
