// Importing React so we can write JSX components
import React from "react";

// Exporting the DuelStage component so it can be used inside Mirror
export default function DuelStage({
    winnerEmoji,      // Emoji for the winning move
    loserEmoji,       // Emoji for the losing move
    animateWinner,    // Boolean that triggers the winner animation
    animateLoser,     // Boolean that triggers the loser animation
    winnerSide,       // "player" or "computer" — determines starting side
    matchupAnimation, // Special animation class for specific matchups
}) {

    // Returning the visual layout for the duel animation
    return (
        // Container that centers both emojis inside the mirror
        <div className="mirror-center-stage">

            {/* 
                WINNER EMOJI
                - Always appears larger and more dramatic
                - Starts from left if the player won
                - Starts from right if the computer won
                - Travels toward the center when animateWinner is true
                - Also receives a matchup-specific animation (cut, smash, etc.)
            */}
            <span
                className={
                    "cinema-winner " +                                 // Base winner styling
                    (winnerSide === "player"                           // Starting side logic
                        ? "winner-from-left "                          // Player winner starts left
                        : "winner-from-right ") +                      // Computer winner starts right
                    (animateWinner ? "winner-travel " : "") +          // Travel animation toggle
                    matchupAnimation                                   // Special matchup animation
                }
            >
                {winnerEmoji}
            </span>

            {/* 
                LOSER EMOJI
                - Appears smaller and reacts to the winner's attack
                - Starts opposite the winner
                - Plays a "loser-react" animation when animateLoser is true
            */}
            <span
                className={
                    "cinema-loser " +                                  // Base loser styling
                    (winnerSide === "player"                           // Starting side logic
                        ? "loser-from-right "                          // Player winner → loser starts right
                        : "loser-from-left ") +                        // Computer winner → loser starts left
                    (animateLoser ? "loser-react " : "")               // Reaction animation toggle
                }
            >
                {loserEmoji}
            </span>

        </div>
    );
}
