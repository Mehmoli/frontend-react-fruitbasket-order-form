import React from 'react';
import {useState} from "react";
import './App.css';

function App() {

    const [strawberry, setStrawberry] = useState(0);
    const [banana, setBanana] = useState(0);
    const [apple, setAppel] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    const [frontName, setFrontName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0)
    const [zipCode, setZipCode] = useState('')
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week-frequency')
    const [deliveryDayTime, toggleDeliveryDayTime] = useState('daytime');
    const [comments, setComments] = useState('');
    const [agreeConditions, toggleAgreeConditions] = useState(false);

    //reset counters
    const resetCounters = () => {
        setStrawberry(0);
        setBanana(0);
        setAppel(0);
        setKiwi(0);
    }


    function formHandleOnSubmit(e) {
        e.preventDefault();
        console.log(`
        Voornaam:${frontName}
        Achternaam: ${lastName}, 
        Leeftijd: ${age}, 
        Postcode: ${zipCode}, 
        Bezorgfrequentie: ${deliveryFrequency}, ${deliveryDayTime}
        Opmerkingen: ${comments},
        Algemene voorwaarden: ${agreeConditions}`
        );
        console.log(`Fruitmand bestelling - aardbeien: ${strawberry}, bananen: ${banana}, appels: ${apple}, kiwi's: ${kiwi}`);
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
            <form onSubmit={formHandleOnSubmit}>
                <fieldset>
                    <legend>Bestelformulier</legend>

                    <label
                        className="formClass"
                        htmlFor="frontName"
                    >
                        Voornaam
                    </label>
                    <input
                        id="frontName"
                        name="frontName"
                        type="text"
                        maxLength="50"
                        value={frontName}
                        onChange={(e) => setFrontName(e.target.value)}
                    />
                    <br/><br/>

                    <label
                        className="formClass"
                        htmlFor="lastName"
                    >
                        Achternaam
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        maxLength="50"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br/><br/>
                    <label
                        className="formClass"
                        htmlFor="age"
                    >
                        Leeftijd
                    </label>
                    <input
                        id="age"
                        name="age"
                        type="number"
                        maxLength="3"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}

                    />
                    <br/><br/>
                    <label
                        className="formClass"
                        htmlFor="zipCode"
                    >
                        Postcode
                    </label>
                    <input
                        id="zipCode"
                        name="zipCode"
                        type="text"
                        maxLength="6"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    <br/><br/>
                    <label
                        className="formClass"
                        htmlFor="deliveryFrequency"
                    >
                        Bezorgfrequentie
                    </label>
                    <br/><br/>
                    <select
                        id="deliveryFrequency"
                        name="deliveryFrequency"
                        value={deliveryFrequency}
                        onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                    >
                        <option
                            value="week"
                        >
                            Iedere week
                        </option>
                        <option
                            value="twee weken"
                        >
                            Om de week
                        </option>
                        <option
                            value="maand"
                        >
                            Iedere maand
                        </option>
                    </select>
                    <br/><br/>

                    <input
                        id="dayRadioCheckbox"
                        name="dayRadioCheckbox"
                        type="radio"
                        value="overdag"
                        checked={deliveryDayTime === "overdag"}
                        onChange={(e) => toggleDeliveryDayTime(e.target.value)}
                    />
                    <label
                        className="choice"
                        htmlFor="dayRadioCheckbox"
                    >
                        Overdag
                    </label>
                    <input
                        id="dayRadioCheckbox"
                        name="dayRadioCheckbox"
                        type="radio"
                        value="'s Avonds"
                        checked={deliveryDayTime === "'s Avonds"}
                        onChange={(e) => toggleDeliveryDayTime(e.target.value)}
                    />
                    <label
                        className="choice"
                        htmlFor="eveningRadioCheckbox"
                    >
                        's Avonds
                    </label>
                    <br/><br/>
                    <label
                        className="formClass"
                        htmlFor="textAreaBox"
                    >
                        Opmerking
                    </label>
                    <br/>
                    <textarea
                        id="textAreaBox"
                        name="textAreaBox"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        rows={4}
                        cols={30}
                    >
                    </textarea>
                    <br/><br/>

                    <input
                        id="termCondition"
                        name="termCondition"
                        className="element checkbox"
                        type="checkbox"
                        value={agreeConditions}
                        onChange={(e) => toggleAgreeConditions(e.target.checked)}
                    />
                    <label
                        className="choice"
                        htmlFor="termCondition"
                    >
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <br/><br/>

                    <button
                        id="submitButton"
                        type="submit"
                        name="submit"
                        value="Verzend"
                    >
                        Verzend
                    </button>
                    <br/><br/>

                </fieldset>
            </form>
        </>
    );
}

export default App;
