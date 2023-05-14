import Gallery from "./Gallery";
import "./ProjectFour.css";

function ProjectFive() {
  const galleryImages = [
    {
      img: "Images/print/print_1.png",
    },
    {
      img: "Images/print/print_2.png",
    },
    {
      img: "Images/print/print_3.png",
    },
    {
      img: "Images/print/print_4.png",
    },
  ];

  return (
    <div className="ProjFour">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default ProjectFive;
