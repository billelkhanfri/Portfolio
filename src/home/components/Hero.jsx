import Billel from "../../images/Billel-profile-picture.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import "../styles/Home.css";
import TypingEffect from "../../common/components/TypingEffect";
function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  // Update scroll position on scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only run this effect once on component mount

  useEffect(() => {
    // Calculate the direction of scroll
    const direction = scrollY > lastScrollY ? "down" : "up";

    // Update translateY based on scroll direction
    setTranslateY(
      (prevTranslateY) => prevTranslateY + (direction === "down" ? -0.2 : 0.2)
    );

    // Update lastScrollY
    setLastScrollY(scrollY);
  }, [scrollY]);

  return (
    <div className="custom-container">
      <div className="hero">
        <div
          className="hero-image"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          <img src={Billel} alt="person with glasses" />
        </div>

        <div className="hero-text-wrapper">
          <div className="hero-text">
            <div className="citation">
              <div className="apostrophe">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 546.3 716.62"
                  style={{ width: "100px", height: "100px" }}
                >
                  <defs>
                    <style>{`.cls-1 { fill: var(--primary-color); }`}</style>
                  </defs>
                  <g id="apostrophe">
                    <path
                      className="cls-1"
                      d="M546.3,0l-246.38,19S-7.62,636.23,.14,716.61c97.77,.39,361.77-22.61,361.77-22.61L546.3,0Z"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 546.3 716.62"
                  style={{ width: "100px", height: "100px" }}
                >
                  <defs>
                    <style>{`.cls-1 { fill: var(--primary-color); }`}</style>
                  </defs>
                  <g id="apostrophe">
                    <path
                      className="cls-1"
                      d="M546.3,0l-246.38,19S-7.62,636.23,.14,716.61c97.77,.39,361.77-22.61,361.77-22.61L546.3,0Z"
                    />
                  </g>
                </svg>
              </div>
              <div>
                {" "}
                <h2>
                  En tant que développeur web, je suis déterminé à apporter un
                  engagement sans faille à chaque projet, en intégrant mes
                  expériences variées et mes compétences.
                </h2>{" "}
              </div>

              <div className="apostrophe-reversed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 546.3 716.62"
                  style={{ width: "100px", height: "100px" }}
                >
                  <defs>
                    <style>{`.cls-1 { fill: var(--primary-color); }`}</style>
                  </defs>
                  <g id="apostrophe">
                    <path
                      className="cls-1"
                      d="M546.3,0l-246.38,19S-7.62,636.23,.14,716.61c97.77,.39,361.77-22.61,361.77-22.61L546.3,0Z"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 546.3 716.62"
                  style={{ width: "100px", height: "100px" }}
                >
                  <defs>
                    <style>{`.cls-1 { fill: var(--primary-color); }`}</style>
                  </defs>
                  <g id="apostrophe">
                    <path
                      className="cls-1"
                      d="M546.3,0l-246.38,19S-7.62,636.23,.14,716.61c97.77,.39,361.77-22.61,361.77-22.61L546.3,0Z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="citation-author">
              <p>Billel KHANFRI</p>

              <TypingEffect typedText=" Développeur Frontend "></TypingEffect>
            </div>

            <div className="icons">
              <a href="https://github.com/billelkhanfri">
                <FaGithub className="icon github" />
              </a>
              <a href="https://www.linkedin.com/in/billel-khanfri-ab99b3b9">
                <FaLinkedin className="icon linkedin" />
              </a>
              <a href="mailto:khanfri.billel@yahoo.fr">
                <FiMail className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
