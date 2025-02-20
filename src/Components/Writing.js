import "./Writing.css";
import { Link } from "react-router-dom";

function Writing() {
  const galleryImages = [
    {
      img: "Images/substack/three_3.jpg",
      link: "https://ercdraw.substack.com/p/three-more-things",
    },
    {
      img: "Images/substack/three_2.jpg",
      link: "https://ercdraw.substack.com/p/the-week-in-3-things",
    },
    {
      img: "Images/substack/three_1.jpg",
      link: "https://ercdraw.substack.com/p/three-things-this-week",
    },
    {
      img: "Images/substack/aPoem.jpg",
      link: "https://ercdraw.substack.com/p/how-to-eat-the-sun-and-other-feelings",
    },
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
