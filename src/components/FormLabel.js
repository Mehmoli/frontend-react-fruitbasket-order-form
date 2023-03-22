import React from 'react'

function FormLabel({ htmlForName, label, clasAttribute}) {
    return (
        <>
            <label
                htmlFor={htmlForName}
                className={clasAttribute}
            >
                {label}
            </label>
        </>
    )
}

export default FormLabel;