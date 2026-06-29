// Importing React so we can write JSX components
import React from "react";

// Exporting the DuelStage component so it can be used inside Mirror
export default function DuelStage({
    winnerEmoji,      // Emoji for the winning move
    loserEmoji,       // Emoji for the losing move
    animateWinner,    // Boolean that triggers the winner animation
    animateLoser,     // Boolean that triggers the loser animation
    winnerSide,       // "player" or "computer" — determines starting side
    matchupAnimation, // Special animation class for specific matchups (LOSER ONLY)
}) {

    // Returning the visual layout for the duel animation
    return (
        // Container that centers both emojis inside the mirror
        <div className="mirror-center-stage">

            {/* 
                WINNER EMOJI
                - Travels dramatically
                - Grows large
                - STAYS on screen until next round
                - DOES NOT get matchup animation
            */}
            <span
                className={
                    "cinema-winner " +
                    (winnerSide === "player"
                        ? "winner-from-left "
                        : "winner-from-right ") +
                    (animateWinner ? "winner-travel " : "")
                }
            >
                {winnerEmoji}
            </span>

            {/* 
                LOSER EMOJI
                - Reacts to winner
                - Drops away
                - Gets matchup animation (cut, burn, smash, reflect)
            */}
            <span
                className={
                    "cinema-loser " +
                    (winnerSide === "player"
                        ? "loser-from-right "
                        : "loser-from-left ") +
                    (animateLoser ? "loser-react " : "") +
                    matchupAnimation
                }
            >
                {loserEmoji}
            </span>

        </div>
    );
}
