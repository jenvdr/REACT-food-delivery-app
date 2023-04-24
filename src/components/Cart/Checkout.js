import classes from './Checkout.module.css';
import React, {useRef, useState} from 'react';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postcode: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postcodeInputRef = useRef();
    const cityInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostcode = postcodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameValid = !isEmpty(enteredName);
        const enteredStreetValid = !isEmpty(enteredStreet);
        const enteredPostcodeValid = isFiveChars(enteredPostcode);
        const enteredCityValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameValid,
            street: enteredStreetValid,
            postcode: enteredPostcodeValid,
            city: enteredCityValid
        });

        const formIsValid = enteredNameValid && enteredStreetValid && enteredPostcodeValid && enteredCityValid;

        if (!formIsValid) {
            return;
        }
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" ref={nameInputRef}/>
                {!formInputsValidity.name && <p>Please enter a valid name.</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" ref={streetInputRef}/>
                {!formInputsValidity.street && <p>Please enter a valid street.</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.postcode ? '' : classes.invalid}`}>
                <label htmlFor="posctode">Postal code</label>
                <input id="posctode" type="text" ref={postcodeInputRef}/>
                {!formInputsValidity.postcode && <p>Please enter a valid postcode.</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" ref={cityInputRef}/>
                {!formInputsValidity.city && <p>Please enter a valid city.</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Checkout;