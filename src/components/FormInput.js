import React from 'react'

function FormInput({nameAttribute, nameAttributeId, inputType, length, value, handleChange}) {
    return (
            <input
                name={nameAttribute}
                id={nameAttributeId}
                type={inputType}
                maxLength={length}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
    )
}

export default FormInput;