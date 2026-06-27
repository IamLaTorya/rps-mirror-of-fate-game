// This component displays the special animation for a tie round.
// It shows both emojis and plays the "null round" visual effect.
import React from "react";
import "../App.css";
// Export the NullRound component so it can be used inside GameScreen
export default function NullRound({
    winnerEmoji,//Emoji representing the player's move
    loserEmoji,//Emoji representing computer's move
    animateNullRound,//Boolean that triggers the tie animation
}) {//Returning the visual layout for the tie animation
    return (
        <div//if animateNullRound is true, add the "null-bump" animation class, css connection is "mirror-null-row"
            className={
                "mirror-null-row" + (animateNullRound ? " null-bump" : "")
            }
        >
            {/* Display the first emoji (player side) */}
            <span className="mirror-null-emoji">{winnerEmoji}</span>
            {/* Display the second emoji (computer side) */}
            <span className="mirror-null-emoji">{loserEmoji}</span>
        </div>
    );
}
