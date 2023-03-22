import React from 'react'
import Button from './Button'

function FruitCounter({setCounter, counter}) {
    return (
        <>
            <Button buttonType="button" isDisabled={counter < 1} handleClick={() => setCounter(counter - 1)}>
                -
            </Button>
            {counter}
            <Button buttonType="button" isDisabled={false} handleClick={() => setCounter(counter + 1)}>
                +
            </Button>
        </>
    )
}

export default FruitCounter;