// Import React and useState for component state
import React, { useState } from "react";

// Import the Mirror component
import Mirror from "../components/Mirror";

// Import the moves, emojis, and explanationMap from rules.js
import { moves, emojis, explanationMap } from "../logic/rules";

// Import the Why Modal component
import WhyModal from "../components/WhyModal";

const emojiToMove = {
    "🪨": "stone",
    "📜": "scroll",
    "✂️": "shears",
    "🔥": "flame",
    "🪞": "mirror"
};


// ---------------------------------------------------------
// GameScreen Component
// ---------------------------------------------------------
export default function GameScreen({
    question,
    playerWins,
    computerWins,
    playerChoice,
    computerChoice,
    showLabels,
    winnerEmoji,
    loserEmoji,
    isTieRound,
    animateWinner,
    animateLoser,
    animateNullRound,
    winnerSide,
    matchupAnimation,
    mirrorRipple,
    finalMessage,
    gameOver,
    playRound,
    resetGame,
}) {

    // ---------------------------------------------------------
    // Why Modal State (must be inside the component)
    // ---------------------------------------------------------
    const [isWhyOpen, setIsWhyOpen] = useState(false);
    const [whyTitle, setWhyTitle] = useState("");
    const [whyBody, setWhyBody] = useState("");



    // ---------------------------------------------------------
    // Function to open the Why modal with correct explanation
    // ---------------------------------------------------------
function openWhyModal() {
    const winnerMove = emojiToMove[winnerEmoji];
    const loserMove = emojiToMove[loserEmoji];

    // If both moves exist → show explanation
    const info = explanationMap[winnerMove]?.[loserMove];

    if (info) {
        setWhyTitle(info.title);
        setWhyBody(info.body);
        setIsWhyOpen(true);

        // setTimeout(() => setIsWhyOpen(false), 3000);
        return;
    }

    // Fallback for tie or missing data
    setWhyTitle("Symbol Interactions");
    setWhyBody(
        "🪨 Stone defeats ✂️ Shears and 🔥 Flame.\n" +
        "📜 Scroll defeats 🪨 Stone and 🪞 Mirror.\n" +
        "✂️ Shears defeat 📜 Scroll and 🔥 Flame.\n" +
        "🪞 Mirror defeats ✂️ Shears and 🪨 Stone.\n" +
        "🔥 Flame defeats 🪞 Mirror and 📜 Scroll."
    );

    setIsWhyOpen(true);
    // setTimeout(() => setIsWhyOpen(false), 3000);
}

    // Component Return — UI layout
    return (
        <>
            {/* Question Display */}
            <h2>Question:</h2>
            <p className="question-text">{question}</p>

            {/* Score Row */}
            <h3>Will the Reflection be in your Favor?</h3>
            <div className="score-row">
                <span>Seeker: {playerWins}</span>
                <span>Mirror: {computerWins}</span>
            </div>

            {/* Mirror Component */}
            <div className="mirror-wrapper">
            <Mirror
                mirrorRipple={mirrorRipple}
                showLabels={showLabels}
                playerChoice={playerChoice}
                computerChoice={computerChoice}
                winnerEmoji={winnerEmoji}
                loserEmoji={loserEmoji}
                isTieRound={isTieRound}
                animateWinner={animateWinner}
                animateLoser={animateLoser}
                animateNullRound={animateNullRound}
                winnerSide={winnerSide}
                matchupAnimation={matchupAnimation}
                finalMessage={finalMessage}
            />
            <button
                className="why-button mirror-corner"
                onClick={openWhyModal}
            >
                ❔
            </button>
            </div>

            {/* Move Buttons */}
            <div className="button-row">
                {moves.map((move) => (
                    <button
                        key={move}
                        onClick={() => playRound(move)}
                        disabled={gameOver}
                    >
                        {emojis[move]}
                    </button>
                ))}
            </div>

            {/* Why Modal */}
            <WhyModal
                isOpen={isWhyOpen}
                onClose={() => setIsWhyOpen(false)}
                title={whyTitle}
                body={whyBody}
            />

            {/* Game Over Section */}
            {gameOver && (
                <div className="results">
                    <button onClick={resetGame}>New Reflection</button>
                </div>
            )}
        </>
    );
}