import classes from './Checkout.module.css';
import React from 'react';

const Checkout = props => {
    const name = 'Jennifer';
    const street = 'George Row';
    const postal = 'SE16 4UT';
    const city = 'London';

    return (
        <form>
            <div className={classes.control}>
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" value={name}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" value={street}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal code</label>
                <input id="postal" type="text" value={postal}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" value={city}/>
            </div>
            <div className={classes.actions}>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Checkout;