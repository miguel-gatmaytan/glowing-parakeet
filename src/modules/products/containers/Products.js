import React, { Component } from 'react';
import { map } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid } from 'semantic-ui-react';
import { ProductItem } from '../components';
import { getProducts, productsSelector } from '../';

export class Products extends Component {
  get productList() {
    return map(this.props.products, (product, i) => (
      <Grid.Column key={i}>
        <ProductItem product={product} />
      </Grid.Column>
    ));
  }
  render() {
    return (
      <Grid container columns={4}>
        {this.productList}
      </Grid>
    );
  }

  componentDidMount() {
    this.props.getProducts();
  }
}

const mapStateToProps = (state) => ({
  products: productsSelector(state),
});
const mapDispatchToProps = {
  getProducts,
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
