import React from "react";
import logo from "../assets/logo.png";

export default function WelcomeScreen({ goToScreen }) {
    return (
        <>
            <div className="logo-container">
                <img src={logo} alt="Reflection Mirror Logo" />
                <p className="directions">Ask a yes/no question, play the game, and let the mirror reveal your fate.</p>
                <button onClick={() => goToScreen("question")}>
                    Begin Reflection
                </button>
            </div>
        </>
    );
}
