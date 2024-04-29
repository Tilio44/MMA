import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MatchDetails = () => {
    const { eventName, odds, imageFighter1, imageFighter2 } = useParams();
    const oddsObject = JSON.parse(decodeURIComponent(odds));
    const [betAmount, setBetAmount] = useState(0);

    const handleBet = (fighter, odd) => {
        const potentialWin = betAmount * odd;
        alert(`Vous avez misé ${betAmount}€ sur ${fighter} avec une cote de ${odd}. Vous pourriez gagner ${potentialWin}€ en cas de victoire.`);
    };

    return (
        <div style={{ backgroundColor: "#f7f7f7", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "2.0rem", marginBottom: "20px", color: "#333" }}>Détails de l'événement</h2>
            <p style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#555" }}>Match : {eventName}</p>
            <p style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#555" }}>Cotes :</p>
            <ul>
                {Object.entries(oddsObject).map(([fighter, odd]) => (
                    <li key={fighter} style={{ fontSize: "1.5rem", marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <img src={fighter === Object.keys(oddsObject)[0] ? imageFighter1 : imageFighter2} alt={`${fighter}`} style={{ width: "140px", height: "100px", marginRight: "20px", borderRadius: "5px" }} />
                        <span style={{ fontWeight: "bold", marginRight: "20px", color: "#333" }}>{fighter} - Cote:</span>
                        <button onClick={() => handleBet(fighter, odd)} style={{ fontSize: "1.2rem", padding: "5px 10px", border: "none", borderRadius: "5px", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>{odd}</button>
                        <input type="number" value={betAmount} pattern="[0-9]*[.,]?[0-9]+" onChange={(e) => setBetAmount(parseInt(e.target.value))} style={{ fontSize: "1.2rem", width: "80px", marginLeft: "20px", padding: "5px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchDetails;
