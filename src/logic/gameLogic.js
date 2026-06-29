// Importing the move list, emoji map, and win/loss rules
import { moves, emojis, rules, explanationMap } from "./rules";

// Importing the function that returns a fate-based affirmation
import { randomAffirmation } from "./affirmations";

// CREATE playRound FUNCTION
// This factory returns the playRound function with all state setters included.
export function createPlayRound({
    gameOver,            // Prevents playing more rounds after game ends
    playerWins,          // Current number of player wins
    computerWins,        // Current number of computer wins

    // State setters for updating UI and animations
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

    // Function that handles end-of-game affirmations
    endGameWithWinner
}) {

    // Returning the actual playRound function used in the game
    return function playRound(playerMove) {

        // If the game is already over, ignore further input
        if (gameOver) return;

        // Randomly select the computer's move
        const randomIndex = Math.floor(Math.random() * moves.length);
        const computerMove = moves[randomIndex];

        // Store both choices for UI display
        setPlayerChoice(playerMove);
        setComputerChoice(computerMove);

        // Clear any previous final message
        setFinalMessage("");

        // Show labels at the start of the round
        setShowLabels(true);

        // Reset all animations before starting a new round
        setAnimateWinner(false);
        setAnimateLoser(false);
        setAnimateNullRound(false);
        setMatchupAnimation("");
        setIsTieRound(false);
        setWinnerEmoji("");
        setLoserEmoji("");

        // Trigger the mirror ripple effect
        setMirrorRipple(true);

        // Delay to let ripple animation play
        setTimeout(() => {
            setMirrorRipple(false);

            // Local copies of win counters
            let newPlayerWins = playerWins;
            let newComputerWins = computerWins;

            // Track whether this round is a tie
            let tieRound = false;

            // TIE ROUND LOGIC

            if (playerMove === computerMove) {
                tieRound = true;
                setIsTieRound(true);

                // Both emojis are the same in a tie
                setWinnerEmoji(emojis[playerMove]);
                setLoserEmoji(emojis[computerMove]);
            }

            // PLAYER WINS ROUND

            else if (rules[playerMove].includes(computerMove)) {
                newPlayerWins = playerWins + 1;
                setPlayerWins(newPlayerWins);

                setIsTieRound(false);
                setWinnerEmoji(emojis[playerMove]);
                setLoserEmoji(emojis[computerMove]);
                setWinnerSide("player");

                // Determine which special animation to play
                const matchup = `${playerMove}-${computerMove}`;
                switch (matchup) {
                    case "shears-scroll":
                        setMatchupAnimation("cinema-cut");
                        break;
                    case "scroll-stone":
                        setMatchupAnimation("cinema-cover");
                        break;
                    case "stone-shears":
                        setMatchupAnimation("cinema-smash");
                        break;
                    case "flame-scroll":
                        setMatchupAnimation("cinema-burn");
                        break;
                    case "mirror-stone":
                        setMatchupAnimation("cinema-reflect");
                        break;
                    default:
                        setMatchupAnimation("cinema-generic");
                }
            }

            // COMPUTER WINS ROUND

            else {
                newComputerWins = computerWins + 1;
                setComputerWins(newComputerWins);

                setIsTieRound(false);
                setWinnerEmoji(emojis[computerMove]);
                setLoserEmoji(emojis[playerMove]);
                setWinnerSide("computer");

                // Determine special animation
                const matchup = `${computerMove}-${playerMove}`;
                switch (matchup) {
                    case "shears-scroll":
                        setMatchupAnimation("cinema-cut");
                        break;
                    case "scroll-stone":
                        setMatchupAnimation("cinema-cover");
                        break;
                    case "stone-shears":
                        setMatchupAnimation("cinema-smash");
                        break;
                    case "flame-scroll":
                        setMatchupAnimation("cinema-burn");
                        break;
                    case "mirror-stone":
                        setMatchupAnimation("cinema-reflect");
                        break;
                    default:
                        setMatchupAnimation("cinema-generic");
                }
            }

            // POST-ROUND ANIMATION SEQUENCE

            setTimeout(() => {

                // Hide labels before showing animations
                setShowLabels(false);

                // TIE ROUND ANIMATION
                if (tieRound) {
                    setAnimateNullRound(true);

                    // Remove tie animation after it finishes
                    setTimeout(() => {
                        setAnimateNullRound(false);
                        setWinnerEmoji("");
                        setLoserEmoji("");
                    }, 700);
                }

                // WINNER/LOSER ANIMATIONS
                else {
                    setAnimateWinner(true);
                    setAnimateLoser(true);

                    // Check if someone reached 2 wins
                    if (newPlayerWins === 2) {
                        endGameWithWinner("player");
                    } else if (newComputerWins === 2) {
                        endGameWithWinner("computer");
                    }

                    // After animation finishes, return winner emoji to center
                    setTimeout(() => {
                        setWinnerSide("");
                    }, 800); // Match animation duration
                }

            }, 600); // Delay before animations start

        }, 500); // Delay for ripple effect
    };
}


// CREATE resetGame FUNCTION
// Resets all state and returns user to the welcome screen.
export function createResetGame({
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
}) {

    // Returning the resetGame function used in GameScreen
    return function resetGame() {

        // Clear question and choices
        setQuestion("");
        setPlayerChoice("");
        setComputerChoice("");

        // Reset scores
        setPlayerWins(0);
        setComputerWins(0);

        // Reset UI states
        setShowLabels(false);
        setWinnerEmoji("");
        setLoserEmoji("");
        setIsTieRound(false);

        // Reset animations
        setMirrorRipple(false);
        setAnimateWinner(false);
        setAnimateLoser(false);
        setAnimateNullRound(false);
        setMatchupAnimation("");
        setWinnerSide("");

        // Clear final message and game-over state
        setFinalMessage("");
        setGameOver(false);

        // Trigger fade animation
        setFadeKey(prev => prev + 1);

        // Return to welcome screen
        setScreen("welcome");
    };
}
