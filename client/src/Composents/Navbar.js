import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/main.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div class="navbar">
            <header>
            <h3>MMA</h3>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/about">About us</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
        </div>
    );
    
}

export default Navbar;