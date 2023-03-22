import React from 'react'

function Button({ children, isDisabled, buttonType, handleClick }) {
    return (
        <button
            type={buttonType}
            onClick={handleClick}
            disabled={isDisabled || false}
        >
            {children}
        </button>
    )
}

export default Button;