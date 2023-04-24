import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import useHTTP from '../../hooks/use-http';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  
  const httpData = useHTTP();

  const { sendRequest: fetchOrder } = httpData;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderClickHandler = () => {
    setShowForm(true);
  };

  const submitOrderHandler = userData => {
    setIsSubmitting(true);
  
    fetchOrder({
      url:'https://react-food-felivery-app-default-rtdb.europe-west1.firebasedatabase.app/order.json',
      method: 'POST',
      body: {
        user: userData,
        orderedItems: cartCtx.items
      }
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && <button className={classes.button} onClick={orderClickHandler}>Order</button>}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!showForm && modalActions}
      {showForm && <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose}/>}
    </React.Fragment>
    );

    const isSubmittingOrder = <p>Submitting your order!</p>
    const didSubmitOrder = (
      <React.Fragment>
        <p>Successfully sent your order!</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
      </React.Fragment>
    )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingOrder}
      {!isSubmitting && didSubmit && didSubmitOrder}
    </Modal>
  );
};

export default Cart;
