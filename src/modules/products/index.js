import axios from 'axios';
import Immutable from 'seamless-immutable';

const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_PRODUCTS = 'SET_PRODUCTS';

export function getProducts() {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS });
    return axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
    }).then((products) => dispatch(setProducts(products)));
  };
}

function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: products.data,
    },
  };
}

export const productsSelector = state => state.products.list;

export const initialState = {
  list: [],
};

export const productReducer = (state = Immutable(initialState), action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return state.set('list', action.payload.products);
    default:
      return state;
  }
};

export default productReducer;
