import "./Writing.css";
import { Link } from "react-router-dom";

function Writing() {
  const galleryImages = [
    {
      img: "Images/substack/Writing – 1.png",
      link: "https://ercdraw.substack.com/p/i-missed-a-week-so-i-guess-its-three",
    },
    {
      img: "Images/substack/Writing – 2.png",
      link: "https://ercdraw.substack.com/p/three-more-things",
    },
    {
      img: "Images/substack/Writing – 3.png",
      link: "https://ercdraw.substack.com/p/the-week-in-3-things",
    },
    {
      img: "Images/substack/Writing – 4.png",
      link: "https://ercdraw.substack.com/p/three-things-this-week",
    },
    {
      img: "Images/substack/Writing – 5.png",
      link: "https://ercdraw.substack.com/p/how-to-eat-the-sun-and-other-feelings",
    },
    {
      img: "Images/substack/Writing – 6.png",
      link: "https://ercdraw.substack.com/p/i-am-spleen",
    },
    {
      img: "Images/substack/Writing – 7.png",
      link: "https://ercdraw.substack.com/p/notes-on-summer",
    },
    {
      img: "Images/substack/Writing – 8.png",
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
