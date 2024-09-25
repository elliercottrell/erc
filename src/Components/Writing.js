import "./Writing.css";
import { Link } from "react-router-dom";

function Writing() {
  const galleryImages = [
    {
      img: "Images/substack/iAmSpleen.jpg",
      link: "https://ercdraw.substack.com/p/i-am-spleen",
    },
    {
      img: "Images/substack/notesOnSummer_picsq.jpg",
      link: "https://ercdraw.substack.com/p/notes-on-summer",
    },
    {
      img: "Images/substack/flowers_sq.jpg",
      link: "https://ercdraw.substack.com/p/flowers-in-a-vase-which-stands-on",
    },
    {
      img: "Images/substack/noteOnFailing_sq.jpg",
      link: "https://ercdraw.substack.com/p/a-note-on-failing",
    },
  ];

  return (
    <div className="ProjOne">
      <div className="imageWrap">
        {galleryImages &&
          galleryImages.map((image, index) => {
            return (
              <div className="single" key={index}>
                <Link to={image.link} target="_blank">
                  <img src={image.img} alt="" />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Writing;
