import classes from './Checkout.module.css';
import React, {useRef} from 'react';


const Checkout = props => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const posctodeInputRef = useRef();
    const cityInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
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
                <input id="posctode" type="text" ref={posctodeInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" ref={cityInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Checkout;