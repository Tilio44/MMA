import React, { useState } from "react";
import { useParams } from "react-router-dom";


const MatchDetails = () => {
    const { eventName, odds } = useParams();
    const oddsObject = JSON.parse(decodeURIComponent(odds));
    const [betAmount, setBetAmount] = useState(0);

    const handleBet = (fighter, odd) => {
        const potentialWin = betAmount * odd;
        alert(`Vous avez misé ${betAmount}€ sur ${fighter} avec une cote de ${odd}. Vous pourriez gagner ${potentialWin}€ en cas de victoire.`);
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
                        <input type="number" value={betAmount} pattern="[0-9]*[.,]?[0-9]+" onChange={(e) => setBetAmount(parseInt(e.target.value))} style={{ fontSize: "1.2rem", marginLeft: "0.8rem", width: "80px" }} />
                        <button onClick={() => handleBet(fighter, odd)} style={{ fontSize: "1.2rem", marginLeft: "0.8rem" }}>{odd}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchDetails;
