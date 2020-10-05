import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middlewares from './middlewares';
import rootReducer from '../../modules';

//TODO@MG: Remove devtools from prod build.
function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}

export const store = configureStore();

export default store;
