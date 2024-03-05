import "../styles/common.css";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import ModeContent from "./ModeContent";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
 const ref = useRef(null);

 const handleClickOutside = (event) => {
   if (ref.current && !ref.current.contains(event.target)) {
     setMenuOpen(false);
   }
 };

 useEffect(() => {
   // add event listener when component mounts
   document.addEventListener("mousedown", handleClickOutside);

   // cleanup function to remove event listener when component unmounts
   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav ref={ref} className="links-container">
      <ul className={`links ${menuOpen ? "open" : "closed"}`}>
        <li>
          <NavLink to="/" activeclassname="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeclassname="active">
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active" className="contact">
            Contact
          </NavLink>
        </li>
        <li>
          <ModeContent></ModeContent>
        </li>
      </ul>

      <div className="toggle-menu">
        {menuOpen ? (
          <RiCloseFill className="closed-icone" onClick={toggleMenu} />
        ) : (
          <RiMenu3Line className="menu__icone" onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
}

export default Navigation;
