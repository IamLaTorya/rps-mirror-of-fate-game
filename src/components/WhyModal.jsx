// WhyModal.jsx — shows the deeper meaning behind a matchup
import React from "react";

export default function WhyModal({ isOpen, onClose, title, body }) {
    // If modal is not open, render nothing
    if (!isOpen) return null;

    return (
        <div className="why-modal-overlay">
            <div className="why-modal">
                <h3 className="why-modal-title">{title}</h3>
                <p className="why-modal-body">{body}</p>

                <button className="why-modal-close-btn" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
