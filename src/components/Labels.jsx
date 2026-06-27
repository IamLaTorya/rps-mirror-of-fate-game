// Importing React so we can write JSX components
import React from "react";

// Importing the emoji map so we can display the correct emoji for each move
import { emojis } from "../logic/rules";

// Exporting the Labels component so it can be used inside the Mirror
export default function Labels({ playerChoice, computerChoice }) {

    // Returning the visual layout for the labels row
    return (
        // Container that holds both the Player and Computer label blocks
        <div className="labels-row labels-fade">

            {/* 
                PLAYER LABEL BLOCK
                Shows the word "Player" and the emoji for the player's choice
                (only if the player has selected something)
            */}
            <div className="label-block">
                {/* Text label for the player */}
                <span className="label-text">Player</span>

                {/* If the player has chosen a move, show the matching emoji */}
                {playerChoice && (
                    <span className="choice-emoji">{emojis[playerChoice]}</span>
                )}
            </div>

            {/* 
                COMPUTER LABEL BLOCK
                Shows the word "Computer" and the emoji for the computer's choice
                (only if the computer has selected something)
            */}
            <div className="label-block">
                {/* Text label for the computer */}
                <span className="label-text">Computer</span>

                {/* If the computer has chosen a move, show the matching emoji */}
                {computerChoice && (
                    <span className="choice-emoji">{emojis[computerChoice]}</span>
                )}
            </div>

        </div>
    );
}
