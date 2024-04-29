import React from "react";
import "./Styles/main.css";
import Navbar from "./Composents/Navbar";

function About() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="text-about">
                <h2>MMA Project</h2>
                <p>Tilio BOURIGAULT, Simon LOUIS and Mathéo HAMON</p>
            </div>
        </React.Fragment>
    );
}

export default About;
