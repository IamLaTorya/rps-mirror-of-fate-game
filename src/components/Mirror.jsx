// Importing React so we can use JSX
import React from "react";

// Importing the label component that shows "Player" and "Computer" above emojis
import Labels from "./Labels";

// Importing the component that handles winner/loser animations
import DuelStage from "./DuelStage";

// Importing the component that handles tie-round animations
import NullRound from "./NullRound";

// Exporting the Mirror component so it can be used inside GameScreen
export default function Mirror({
    mirrorRipple,      // Boolean that triggers the ripple effect on the mirror
    showLabels,        // Whether to show "Player" and "Computer" labels
    playerChoice,      // Player's selected move
    computerChoice,    // Computer's selected move
    winnerEmoji,       // Emoji for the winning move
    loserEmoji,        // Emoji for the losing move
    isTieRound,        // Boolean indicating if the round was a tie
    animateWinner,     // Triggers winner animation
    animateLoser,      // Triggers loser animation
    animateNullRound,  // Triggers tie animation
    winnerSide,        // "player" or "computer" — used for positioning animations
    matchupAnimation,  // Special animation class for specific matchups
    finalMessage,      // End-of-game affirmation message
}) {

    // Returning the full mirror visual container
    return (
        <div className="mirror-frame">

            {/* Inner reflective surface of the mirror */}
            <div className="mirror-glass">

                {/* Ripple effect layer — appears briefly when a round begins */}
                {mirrorRipple && <div className="mirror-ripple-layer" />}

                {/* If the game is NOT over, show the mirror content */}
                {!finalMessage && (
                    <div className="mirror-content">

                        {/* Show labels only at the start of each round */}
                        {showLabels && (
                            <Labels
                                playerChoice={playerChoice}
                                computerChoice={computerChoice}
                            />
                        )}

                        {/* 
                            Show winner/loser animations ONLY when:
                            - labels are hidden
                            - there is a winner emoji
                            - it is NOT a tie round
                        */}
                        {!showLabels && winnerEmoji && !isTieRound && (
                            <DuelStage
                                winnerEmoji={winnerEmoji}
                                loserEmoji={loserEmoji}
                                animateWinner={animateWinner}
                                animateLoser={animateLoser}
                                winnerSide={winnerSide}
                                matchupAnimation={matchupAnimation}
                            />
                        )}

                        {/* 
                            Show tie animation ONLY when:
                            - labels are hidden
                            - it IS a tie round
                            - winnerEmoji exists (same emoji for both sides)
                        */}
                        {!showLabels && isTieRound && winnerEmoji && (
                            <NullRound
                                winnerEmoji={winnerEmoji}
                                loserEmoji={loserEmoji}
                                animateNullRound={animateNullRound}
                            />
                        )}

                    </div>
                )}

                {/* 
                    If the game IS over, show the final affirmation message 
                    inside the mirror instead of the animations.
                */}
                {finalMessage && (
                    <div className="mirror-message">
                        <p className="mirror-message-text">{finalMessage}</p>
                    </div>
                )}

            </div>
        </div>
    );
}