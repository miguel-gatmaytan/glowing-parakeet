import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import History from 'util/history';
import LandingPage from 'modules/landing-page';
import Products from 'modules/products/containers';

import Overlay from './components/Overlay';
import AppContainer from './components/AppContainer';

import store from '../store';

export const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Overlay />
      <Router history={History}>
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </AppContainer>
  </Provider>
);

export default App;
