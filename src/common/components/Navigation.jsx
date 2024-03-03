import "../styles/common.css";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import ModeContent from "./ModeContent";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="links-container">
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
