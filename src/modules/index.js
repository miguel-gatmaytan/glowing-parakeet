import { combineReducers } from 'redux';
import productReducer from './products';
import cartReducer from './cart';

export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

export default rootReducer;
