import React from "react";

export default function QuestionScreen({ question, setQuestion, goToScreen }) {
    return (
        <>
            <h2>What question is on your mind?</h2>

            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Should I start this project?"
            />

            <button
                disabled={!question.trim()}
                onClick={() => goToScreen("game")}
            >
                Ask the mirror
            </button>
        </>
    );
}
