import React from "react";
import { useState, useEffect } from "react";
import "./SliderImg.css";

function Slider() {
  let imgNum = 0;
  let imgAlt = 0;
  const [img, setImg] = useState({
    src: "../assest/img/newarrival.jpg",
    alt: "",
  });
  const images = [
    'img/Courses/Revit.jpg',
    'img/Courses/sap.jpg',
    'img/Courses/ETABS.jpg',
  ];
  const alt = [
    "",
    "Wedding Dress",
    "purple Long Prom Dress",
  
  ];

  useEffect(() => {
    setInterval(next, 5000);
  }, [imgNum]);

  const next = () => {
    imgNum++;
    imgAlt++;
    if (imgNum > images.length - 1 && imgAlt > alt.length - 1) {
      imgNum = 0;
      imgAlt = 0;
    }
    setImg({ src: images[imgNum], alt: alt[imgAlt] });
  };
  return (
    <div className="new-arrival">
      <h2 className="title-sections">New Arrival</h2>
      <div className="img-slider">
        <img src={img.src} alt={img.alt} />
        <h3>{img.alt}</h3>
      </div>
    </div>
  );
}

export default Slider;