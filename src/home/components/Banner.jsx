//import images from "../images.json";
import "../styles/Home.css";
import { useState, useEffect } from "react";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/khanfri-billel.appspot.com/o/D_Home.png?alt=media&token=ead9e575-824a-4d5c-98eb-164b6afc2422",
  "https://firebasestorage.googleapis.com/v0/b/khanfri-billel.appspot.com/o/Capture%20d%E2%80%99e%CC%81cran%202024-02-15%20a%CC%80%2014.06.18.PNG?alt=media&token=8c9f50f0-fdbb-4ee8-8643-e9b489b2df65",
  "https://firebasestorage.googleapis.com/v0/b/khanfri-billel.appspot.com/o/Capture%20d%E2%80%99e%CC%81cran%202024-02-15%20a%CC%80%2018.45.56.png?alt=media&token=87abc8ab-870b-45c8-b8bf-fe67d6b69a36",
  "https://firebasestorage.googleapis.com/v0/b/khanfri-billel.appspot.com/o/Capture%20d%E2%80%99e%CC%81cran%202024-02-15%20a%CC%80%2018.51.52.png?alt=media&token=8db37e6b-2c8d-44ef-ba12-2e9e9d4ed0b7",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="content">
        <h1>
          {" "}
          Développeur Web Frontend <br />
        </h1>
        <p>
          Transformez vos idées en réalité grâce à mes compétences de
          développement web
        </p>
        <button>Télecharger mon CV</button>
      </div>
    </div>
  );
};

export default Banner;
