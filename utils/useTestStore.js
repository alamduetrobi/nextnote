import { createContext, useReducer, useState } from 'react';

export const Message_data = createContext(null);



const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}


export function Context({ children }) {

  // const [message, setMessage] = useState(
  //   'Message_data    sdfsddfasdfasfdasfdasd'
  // );
  // const  message = 'StoreProvider  adafasddfasfd asfdasfd';


  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    // <Message_data.Provider value={{ message, setMessage }}>
    <Message_data.Provider value={value}>
    
      {children}
    </Message_data.Provider>
  );
}
