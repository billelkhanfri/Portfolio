import { useState, useEffect } from "react";
import "./LandSlider.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ currentIndex, setCurrentIndex }) => {
const initialContent = [
  {
    h4: "Développement Front-end",
    h1: "Conception et développement d'interfaces utilisateur interactives",
    p: "Expérience approfondie dans la création d'expériences utilisateur réactives et conviviales en utilisant HTML, CSS, JavaScript et un Librairie comme React.js.",
  },
  {
    h4: "Développement Back-end",
    h1: "Construction de serveurs robustes et évolutifs",
    p: "Maîtrise des technologies back-end telles que Node.js et MongoDB pour développer des applications web performantes et extensibles.",
  },
  {
    h4: "Base de données et Stockage",
    h1: "Gestion et optimisation des données",
    p: "Expérience dans la conception de schémas de base de données efficaces, l'optimisation des requêtes et l'intégration de solutions de stockage comme MongoDB et Firebase.",
  },
  {
    h4: "Design et UI/UX",
    h1: "Création d'expériences utilisateur attrayantes",
    p: "Compétences en conception graphique avec des outils tels que Photoshop et Illustrator, ainsi qu'une sensibilité pour l'ergonomie et l'expérience utilisateur.",
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
    }, 6000);

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
        
        <Link
          to="https://firebasestorage.googleapis.com/v0/b/billel-khanfri.appspot.com/o/projects%2FCV_CLASSIQUE_KHANFRI.pdf?alt=media&token=7831d864-9c10-4edf-bb9d-c57db91a97e6"
          download
          target="_blank"
        >
          <button className="banner_button">Télécharger mon CV</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
