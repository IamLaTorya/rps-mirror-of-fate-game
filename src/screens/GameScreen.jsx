import React from "react";
import Mirror from "../components/Mirror";
import { moves, emojis } from "../logic/rules";

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
    return (
        <>
            <h2>Question:</h2>
            <p className="question-text">{question}</p>

            <h3>Will the Reflection be in your Favor?</h3>
            <div className="score-row">
                <span>Player: {playerWins}</span>
                <span>Computer: {computerWins}</span>
            </div>

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

            {gameOver && (
                <div className="results">
                    <button onClick={resetGame}>New Reflection</button>
                </div>
            )}
        </>
    );
}
