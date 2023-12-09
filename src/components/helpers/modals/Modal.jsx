import React from 'react';

import './Modal.css'

const Modal = ({ isOpen, onClose, onSubmit, email, setEmail, message, setMessage }) => {
    const handleOverlayClick = () => {
        onClose(); // Close the modal when clicked outside
    };

    const handleContentClick = (e) => {
        e.stopPropagation(); // Prevent the click event from propagating to the overlay and closing the modal
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <dialog open className="modal">
                        <form onSubmit={onSubmit}>
                            <div className="modal-content" onClick={handleContentClick}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label>Message:</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                                <div>
                                <button type="submit">Submit</button>
                                <button type="button" onClick={onClose}>
                                    Cancel
                                </button>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </div>
            )}
        </>
    );
};

export default Modal;
