import Immutable from 'seamless-immutable';

const ADD_ITEMS_TO_CART = 'ADD_ITEMS_TO_CART';

export function addItemsToCart(count, productId) {
  return {
    type: ADD_ITEMS_TO_CART,
    payload: {
      count,
      productId,
    },
  };
}

export const cartItemsSelector = (state) => state.cart.items;

export const initialState = {
  items: {}, //Dictionary of Product ID : Count
};

export const productReducer = (state = Immutable(initialState), action) => {
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      return state.setIn(['items', action.payload.productId], action.payload.count);
    default:
      return state;
  }
};

export default productReducer;
