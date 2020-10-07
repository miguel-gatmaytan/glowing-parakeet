import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { cartItemsSelector } from '../';
import { productsSelector } from 'modules/products';

export const CartRenderer = (props) => {
  return (
    <div>
      {map(props.cartItems, (item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: cartItemsSelector(state),
  products: productsSelector(state),
});
const mapDispatchToProps = {};


CartRenderer.propTypes = {
  cartItems: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CartRenderer);
