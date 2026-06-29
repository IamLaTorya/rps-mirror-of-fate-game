import React from "react";
import logo from "../assets/logo.png";

export default function WelcomeScreen({ goToScreen }) {
    return (
        <>
            <div className="logo-container">
                <img src={logo} alt="Reflection Mirror Logo" />
                <p>The Mirror answers through symbols of fate. Choose the one that calls to you—the hand guides your intuition. You never know if the reflection leans yes or no, and that spark of surprise reveals your true urge.</p>
                <button onClick={() => goToScreen("instructions")}>
                    Instructions
                </button>
            </div>
        </>
    );
}
