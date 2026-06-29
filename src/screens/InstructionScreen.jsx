import React from "react";

export default function InstructionScreen({ goToScreen }) {
    return (
        <div className="instruction-screen">
            <h3 className="instruction-title">How to Play — Mirror of Fate</h3>
            <p>
                1. Ask a yes/no question.
                <br></br>
                2. Choose the symbol that matches your energy:
                <br></br>
                🪨 grounding • 📜 clarity • ✂️ release • 🔥 transformation • 🪞 truth
                <br></br>
                3. The Mirror chooses its own symbol.
                <br></br>
                4. Symbols interact — cut, cover, smash, burn, reflect.
                <br></br>
                5. Two wins reveal your reflection.
                <br></br>
                *Tap ❔ to see why each symbol wins.
            </p>

            {/* -----------------------------
                BUTTON TO RETURN
            ------------------------------ */}
            <button onClick={() => goToScreen("question")}>
                Begin Reflection
            </button>
        </div>
    );
}
