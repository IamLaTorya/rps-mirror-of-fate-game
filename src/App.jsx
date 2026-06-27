// Importing React's useState hook so we can store and update component state
import { useState } from "react";

// Importing global styles for the entire app
import "./App.css";

// Importing the logo asset (if used in your screens)
import logo from "./assets/logo.png";

// LOGIC IMPORTS
// These files contain the rules, emojis, affirmations, and game logic.

// Importing move list, emoji map, and win/loss rules
import { moves, emojis, rules } from "./logic/rules";

// Importing the function that returns a fate-based affirmation
import { randomAffirmation } from "./logic/affirmations";

// Importing the logic factories that generate playRound and resetGame functions
import { createPlayRound, createResetGame } from "./logic/gameLogic";

// SCREEN COMPONENTS
// These are the three main screens of your app.

import WelcomeScreen from "./screens/WelcomeScreen";
import QuestionScreen from "./screens/QuestionScreen";
import GameScreen from "./screens/GameScreen";
import Footer from "./components/Footer";

// Exporting the main App component
export default function App() {

  // STATE VARIABLES
  // These control everything about the game flow and animations.

  // Which screen is currently visible ("welcome", "question", "game")
  const [screen, setScreen] = useState("welcome");

  // Used to force fade-in animations when switching screens
  const [fadeKey, setFadeKey] = useState(0);

  // The question the user types before the game begins
  const [question, setQuestion] = useState("");

  // Player and computer move selections
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  // Score tracking for best-of-three gameplay
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  // Whether to show the "Player" and "Computer" labels above the emojis
  const [showLabels, setShowLabels] = useState(false);

  // Emojis used for winner/loser display
  const [winnerEmoji, setWinnerEmoji] = useState("");
  const [loserEmoji, setLoserEmoji] = useState("");

  // Whether the round resulted in a tie
  const [isTieRound, setIsTieRound] = useState(false);

  // Ripple effect that plays on the mirror at the start of each round
  const [mirrorRipple, setMirrorRipple] = useState(false);

  // Animation toggles for winner, loser, and tie rounds
  const [animateWinner, setAnimateWinner] = useState(false);
  const [animateLoser, setAnimateLoser] = useState(false);
  const [animateNullRound, setAnimateNullRound] = useState(false);

  // Which side the winner came from ("player" or "computer")
  const [winnerSide, setWinnerSide] = useState("");

  // Special matchup animation (cut, smash, vaporize, etc.)
  const [matchupAnimation, setMatchupAnimation] = useState("");

  // Final affirmation message shown when the game ends
  const [finalMessage, setFinalMessage] = useState("");

  // Whether the game is over (prevents further rounds)
  const [gameOver, setGameOver] = useState(false);

  // SCREEN SWITCHING FUNCTION
  // Moves the user between welcome → question → game screens.
  const goToScreen = (next) => {
    setScreen(next);               // Change the screen
    setFadeKey((prev) => prev + 1); // Trigger fade-in animation
  };

  // END GAME LOGIC
  // Called when either player reaches 2 wins.
  
  const endGameWithWinner = (winner) => {
    // Get a fate-based affirmation message
    const message = randomAffirmation(winner);

    // Mark the game as finished
    setGameOver(true);

    // Trigger mirror ripple effect
    setMirrorRipple(true);

    // After ripple finishes, show the final message
    setTimeout(() => {
      setMirrorRipple(false);
      setFinalMessage(message);
    }, 600);
  };

  // CREATE playRound FUNCTION FROM gameLogic.js
  // This function handles the entire round flow and animations.
  const playRound = createPlayRound({
    gameOver,
    playerWins,
    computerWins,
    setPlayerChoice,
    setComputerChoice,
    setFinalMessage,
    setShowLabels,
    setAnimateWinner,
    setAnimateLoser,
    setAnimateNullRound,
    setMatchupAnimation,
    setIsTieRound,
    setWinnerEmoji,
    setLoserEmoji,
    setMirrorRipple,
    setPlayerWins,
    setComputerWins,
    setWinnerSide,
    endGameWithWinner
  });

  // CREATE resetGame FUNCTION FROM gameLogic.js
  // Resets all state and returns user to the welcome screen.
  const resetGame = createResetGame({
    setQuestion,
    setPlayerChoice,
    setComputerChoice,
    setPlayerWins,
    setComputerWins,
    setShowLabels,
    setWinnerEmoji,
    setLoserEmoji,
    setIsTieRound,
    setMirrorRipple,
    setAnimateWinner,
    setAnimateLoser,
    setAnimateNullRound,
    setMatchupAnimation,
    setWinnerSide,
    setFinalMessage,
    setGameOver,
    setFadeKey,
    setScreen
  });

  // RENDER SECTION
  // Determines which screen to show based on the "screen" state.

  return (
    <>
      {/* Main app wrapper */}
      <div className="app">

        {/* Fade-in wrapper for screen transitions */}
        <div key={fadeKey} className="card fade-in">

          {/* WELCOME SCREEN */}
          {screen === "welcome" && (
            <WelcomeScreen goToScreen={goToScreen} />
          )}

          {/* QUESTION SCREEN */}
          {screen === "question" && (
            <QuestionScreen
              question={question}
              setQuestion={setQuestion}
              goToScreen={goToScreen}
            />
          )}

          {/* GAME SCREEN */}
          {screen === "game" && (
            <GameScreen
              question={question}
              playerWins={playerWins}
              computerWins={computerWins}
              playerChoice={playerChoice}
              computerChoice={computerChoice}
              showLabels={showLabels}
              winnerEmoji={winnerEmoji}
              loserEmoji={loserEmoji}
              isTieRound={isTieRound}
              animateWinner={animateWinner}
              animateLoser={animateLoser}
              animateNullRound={animateNullRound}
              winnerSide={winnerSide}
              matchupAnimation={matchupAnimation}
              mirrorRipple={mirrorRipple}
              finalMessage={finalMessage}
              gameOver={gameOver}
              playRound={playRound}
              resetGame={resetGame}
            />
          )}

        </div>
        <Footer/> {/*Footer sits Below the card */}
      </div>
    </>
  );
}
