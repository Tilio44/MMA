import React from "react";
import { useParams } from "react-router-dom";

const MatchDetails = () => {
    const { eventName, odds } = useParams();
    const oddsObject = JSON.parse(decodeURIComponent(odds));

    const handleBet = (fighter, odd) => {
        // Mettez ici la logique de mise de paris
        alert(`Vous avez misé sur ${fighter} avec une cote de ${odd}`);
    };

    return (
        <div>
            <h2 style={{ fontSize: "2.0rem" }}>Détails de l'événement</h2>
            <p style={{ fontSize: "1.5rem" }}>Match : {eventName}</p>
            <p style={{ fontSize: "1.5rem" }}>Cotes :</p>
            <ul>
                {Object.entries(oddsObject).map(([fighter, odd]) => (
                    <li key={fighter} style={{ fontSize: "1.5rem" }}>
                        {fighter} - Cote:
                        <button onClick={() => handleBet(fighter, odd)} style={{ fontSize: "1.2rem", marginLeft: "0.8rem" }}>{odd}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchDetails;
