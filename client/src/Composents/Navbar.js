import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div class="navbar">
      <header>
        <h3>MMA</h3>
        <nav ref={navRef}>
          <a href="/">Accueil</a>
          <a href="/login">Se connecter</a>
          <a href="/register">S'inscrire</a>
          <a href="/about">À propos</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
