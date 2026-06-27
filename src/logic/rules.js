// This array lists all possible moves in the game
export const moves = ["rock", "paper", "scissors", "lizard", "spock"];

//Each move has a matching emoji for visual feedback
export const emojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️",
    lizard: "🦎",
    spock: "🖖",
};

// Rules: this object defines which moves each move can defeat
export const rules = {
    rock: ["scissors", "lizard"],//rock defeats scissors & lizard
    paper: ["rock", "spock"],//paper defeats rock & spock
    scissors: ["paper", "lizard"],//scissors defeats paper & lizard
    lizard: ["spock", "paper"],//lizard defeats spock & paper
    spock: ["scissors", "rock"],// spock defeats scissors & rock
};

