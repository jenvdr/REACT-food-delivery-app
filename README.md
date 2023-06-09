# REACT-food-delivery-app

## Summary

### Functionality

- Food ordering app which sources data from Firebase realtime database with custom use-http hook;
- User can add x amount of items to a cart;
- Cart opens in modal;
- On order button click checkout form component appears within modal;
- User can submit name and address, form validation happens on submit;
- Order details + user details are posted to Firebase realtime database;

### REACT specific details

- component structure
- custom http-hook
- REACT hooks
- cart context
- cart provider
- CSS modules

### Important

- Custom Firebase database used expires after 1 month, will have to be replicated, ideally offer post request to easily replicate data;

### Next steps

- Move input into child component to ensure form component is leaner
- Create custom hook for form validation
