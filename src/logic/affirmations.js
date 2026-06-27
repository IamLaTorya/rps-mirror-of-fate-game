// Player win affirmations (Yes reponses)
// export an array of yes affirmations for the player
export const playerAffirmations = [
    "Fate extends its hand toward your reflection, guiding your choice.",
    "The mirror brightens — destiny folds itself gently into your favor.",
    "Your reflection aligns with fate’s open palm; the path responds to you.",
    "Fate’s hand rises behind your reflection, lifting your intention forward.",
    "The mirror sees your hand and fate moves with it — the moment bends toward yes."
];

// Computer win affirmations (No responses)
// export an array of no affirmations for the computer
export const computerAffirmations = [
    "Fate withdraws its hand from your reflection; this moment is not yours.",
    "The mirror dims — destiny folds away from your grasp.",
    "Your reflection reaches, but fate’s hand does not rise to meet it.",
    "Fate turns its palm aside, offering no support for this choice.",
    "The mirror sees your hand hesitate, and fate leans away from your desire."
];

// get the randomAffirmation message for the winner
export const randomAffirmation = (winner) => {
    // If the player won, choose from the player affirmations
    if (winner === "player") {
        // Generate a random index within the player array
        const idx = Math.floor(Math.random() * playerAffirmations.length);
        // Return the randomly selected player affirmation
        return playerAffirmations[idx];
    } 
    
    // Otherwise, choose from the computer affirmations
    else {
        // Generate a random index within the computer array
        const idx = Math.floor(Math.random() * computerAffirmations.length);
        // Return the randomly selected computer affirmation
        return computerAffirmations[idx];
    }
};
