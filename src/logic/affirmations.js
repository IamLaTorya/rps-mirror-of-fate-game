// Player win affirmations (Yes reponses)
// export an array of yes affirmations for the player
export const playerAffirmations = [
    "Yes — Fate steadies its hand behind your reflection; the moment opens for you.",
    "Yes — The mirror warms — destiny leans gently toward your intention.",
    "Yes — Your reflection glows as fate aligns with the path you’re reaching for.",
    "Yes — Fate lifts your hand in the mirror, guiding your desire forward.",
    "The mirror’s light bends toward you — a quiet yes rising in your favor.",
    "Yes — Destiny settles beside your reflection, offering its support.",
    "Yes — Your hand meets fate’s palm in the mirror; the way responds to you.",
    "Yes — The mirror brightens — fate leans in, ready to move with your choice.",
    "Yes — Fate circles your reflection with calm assurance; the moment is yours.",
    "Yes — The mirror hums softly — destiny opens a door in your direction."
];

// Computer win affirmations (No responses)
// export an array of no affirmations for the computer
export const computerAffirmations = [
    "Fate lowers its hand from your reflection; not right now.",
    "The mirror dims — destiny steps back from this moment.",
    "Your reflection reaches, but fate does not rise to meet it — not yet.",
    "Fate turns aside, offering no movement toward this choice.",
    "The mirror cools — destiny leans away from your desire for now.",
    "Fate pauses behind your reflection; this is not the moment.",
    "Your hand touches the mirror, but fate remains still — not right now.",
    "Destiny folds away from your grasp; the path does not open today.",
    "The mirror softens — fate withdraws its support for this outcome.",
    "Fate’s palm closes gently, signaling a quiet not now."
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
