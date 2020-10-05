import React, { Component } from 'react';
import { map } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import Container from 'components/Container';

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
      <Container style={{paddingTop: 25}}>
        <Grid container columns={4}>
          {this.productList}
        </Grid>
      </Container>
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
