import React from 'react';
import {useState} from "react";
import './App.css';

function App() {

    const [strawberry, setStrawberry] = useState(0);
    const [banana, setBanana] = useState(0);
    const [apple, setAppel] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    //reset counters
    const resetCounters = () => {
        setStrawberry(0);
        setBanana(0);
        setAppel(0);
        setKiwi(0);
    }

  return (
    <>
        <section>
            <h1>Fruitmand bezorgservice</h1>
            <div className='fruits'>

                <div className='fruit'>
                    🍓Aardbeien
                    <button type="button" disabled={strawberry <= 0}
                            onClick={() => setStrawberry(strawberry - 1)}>-</button>
                    {strawberry}
                    <button type="button" onClick={() => setStrawberry(strawberry + 1)}>+</button>
                </div>
                <div className='fruit'>
                    🍌Bananen
                    <button type="button" disabled={banana <= 0} onClick={() => setBanana(banana - 1)}>-</button>
                    {banana}
                    <button type="button" onClick={() => setBanana(banana + 1)}>+</button>
                </div>
                <div className='fruit'>
                    🍏Appels
                    <button type="button" disabled={apple <= 0} onClick={() => setAppel(apple - 1)}>-</button>
                    {apple}
                    <button type="button" onClick={() => setAppel(apple + 1)}>+</button>
                </div>
                <div className='fruit'>
                    🥝Kiwi's
                    <button type="button" disabled={kiwi <= 0} onClick={() => setKiwi(kiwi - 1)}>-</button>
                    {kiwi}
                    <button type="button" onClick={() => setKiwi(kiwi + 1)}>+</button>
                </div>

                <button type="button" className='reset' onClick={resetCounters}>Reset</button>
            </div>
        </section>
    </>
  );
}

export default App;
