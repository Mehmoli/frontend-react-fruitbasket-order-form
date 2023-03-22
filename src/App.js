import React from 'react';
import {useState} from "react";
import './App.css';
import Button from "./components/Button";
import FruitCounter from "./components/FruitCounter";
import FormInput from './components/FormInput';
import FormLabel from './components/FormLabel';
import Logo from './assets/screenshot-logo.png'


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

    const resetFormFields = () => {
        setFrontName('');
        setLastName('');
        setAge(0);
        setZipCode('');
        toggleDeliveryFrequency('week-frequency');
        toggleDeliveryDayTime('daytime');
        setComments('');
        toggleAgreeConditions(false);
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
        resetFormFields();
    }

    return (
        <>
            <section>
                <img src={Logo} alt='logo'></img>
                <div className='fruits'>

                    <div className='fruit'>
                        🍓Aardbeien
                        <FruitCounter
                            counter={strawberry}
                            setCounter={setStrawberry}
                        />
                    </div>
                    <div className='fruit'>
                        🍌Bananas
                        <FruitCounter
                            counter={banana}
                            setCounter={setBanana}
                        />
                    </div>
                    <div className='fruit'>
                        🍏Appels
                        <FruitCounter
                            counter={apple}
                            setCounter={setAppel}
                        />
                    </div>
                    <div className='fruit'>
                        🥝Kiwi's
                        <FruitCounter
                            counter={kiwi}
                            setCounter={setKiwi}
                        />
                    </div>

                    <Button
                        buttonType="button"
                        className='reset' handleClick={resetCounters}>
                        Reset
                    </Button>
                </div>
            </section>
            <form onSubmit={formHandleOnSubmit}>
                <fieldset>
                    <legend>Bestelformulier</legend>

                    <FormLabel
                        clasAttribute="formClass"
                        htmlForName="frontName"
                        label="Voornaam"
                    />


                    <FormInput
                        nameAtributeId="frontName"
                        nameAtribute="frontName"
                        inputType="text"
                        length="50"
                        value={frontName}
                        handleChange={setFrontName}
                    />
                    <br/><br/>

                    <FormLabel
                        clasAttribute="formClass"
                        htmlForName="lastName"
                        label="Achternaam"
                    />
                    <FormInput
                        nameAtributeId="lastName"
                        nameAtribute="LastName"
                        inputType="text"
                        length="50"
                        value={lastName}
                        handleChange={setLastName}
                    />
                    <br/><br/>
                    <FormLabel
                        clasAttribute="formClass"
                        htmlForName="age"
                        label="Leeftijd"
                    />
                    <FormInput
                        nameAtributeId="age"
                        nameAtribute="age"
                        inputType="number"
                        length="3"
                        value={age}
                        handleChange={setAge}
                    />
                    <br/><br/>
                    <FormLabel
                        clasAttribute="formClass"
                        htmlForName="zipCode"
                        label="Postcode"
                    />
                    <FormInput
                        nameAtributeId="zipCode"
                        nameAtribute="zipCode"
                        inputType="text"
                        length="6"
                        value={zipCode}
                        handleChange={setZipCode}
                    />
                    <br/><br/>
                    <FormLabel
                        clasAttribute="formClass"
                        htmlForName="deliveryFrequency"
                        label="Bezorgfrequentie"
                    />
                    <br/>
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
                        checked={agreeConditions}
                        onChange={(e) => toggleAgreeConditions(e.target.checked)}
                    />
                    <label
                        className="choice"
                        htmlFor="termCondition"
                    >
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <br/><br/>

                    <Button
                        buttonType="submit"
                    >
                        Verzend
                    </Button>
                    <br/><br/>

                </fieldset>
            </form>
        </>
    );
}

export default App;
