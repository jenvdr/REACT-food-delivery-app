import classes from './Checkout.module.css';
import React, {useRef, useState} from 'react';

const isEmpty = value => value.trim().length === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postcodeInputRef = useRef();
    const cityInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostcode = postcodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameValid = !isEmpty(enteredName)
        const enteredStreetValid = !isEmpty(enteredStreet)
        const enteredPostcodeValid = isFiveChars(enteredPostcode)
        const enteredCityValid = !isEmpty(enteredCity)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" ref={streetInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="posctode">Postal code</label>
                <input id="posctode" type="text" ref={postcodeInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" ref={cityInputRef}/>
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Checkout;