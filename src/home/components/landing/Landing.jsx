import { useState, useEffect } from "react";
import "./LandSlider.css";

// eslint-disable-next-line react/prop-types
const Header = ({ currentIndex, setCurrentIndex }) => {
 const initialContent = [
   {
     technologie: "React",
     h4: "Technologie : React",
     h1: "Explorez le projet React",
     p: "Découvrez la puissance de React dans la création d'applications web interactives et dynamiques. Explorez l'architecture basée sur les composants, la gestion d'état et les dernières fonctionnalités du développement web moderne.",
   },
   {
     technologie: "JavaScript",
     h4: "Technologie : JavaScript",
     h1: "Explorez le projet JavaScript",
     p: "Entamez un voyage pour explorer les profondeurs de JavaScript, le langage du web. Apprenez la manipulation du DOM, la programmation asynchrone et la multitude de bibliothèques et de frameworks disponibles.",
   },
   {
     technologie: "API",
     h4: "Technologie : API",
     h1: "Explorez le projet API",
     p: "Plongez dans le royaume des APIs et exploitez la puissance de la connectivité des données. Construisez des applications qui récupèrent et manipulent des données à partir de sources externes, permettant une intégration transparente et un contenu dynamique.",
   },
   {
     technologie: "WordPress",
     h4: "Technologie : WordPress",
     h1: "Explorez le projet WordPress",
     p: "Plongez dans le monde de WordPress et découvrez la flexibilité et la scalabilité qu'il offre pour la création de sites web et de blogs. Personnalisez les thèmes, étendez les fonctionnalités avec des plugins et libérez votre créativité en toute simplicité.",
   },
 ];


  // Utilisez maintenant 'baladesToulon' dans votre application ou site web pour présenter les différentes balades numériques sur la ville de Toulon.

  const [content, setContent] = useState(initialContent[currentIndex]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false); // Remove animation class
    setTimeout(() => {
      setAnimate(true); // Reapply a

      //animation class after a small delay
    }, 10);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % initialContent.length);
    }, 7000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Update content whenever currentIndex changes
  useEffect(() => {
    setContent(initialContent[currentIndex]);
  }, [currentIndex]);

  const titleClass = animate ? "title animated" : "title";
  const bigTitleClass = animate ? "big-title animated" : "big-title";
  const paragClass = animate ? "parag animated" : "parag";

  return (
    <>
      <div className="overlay"></div>

      <div className="introduction-text container">
        <div className={titleClass}>
          <h4>{content.h4}</h4>
        </div>
        <div className={bigTitleClass}>
          <h2>{content.h1}</h2>
        </div>
        <div className={paragClass}>
          <p>{content.p}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
