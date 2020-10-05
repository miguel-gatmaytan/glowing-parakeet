import React, { Component } from 'react';
import { map } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid,
  Container as SemanticContainer,
  Breadcrumb,
} from 'semantic-ui-react';

import Logo from 'components/Logo';
import Container from 'components/Container';

import { ProductItem } from '../components';
import { getProducts, productsSelector } from '../';

import { addItemsToCart } from 'modules/cart';

export class Products extends Component {
  get productList() {
    return map(this.props.products, (product, i) => (
      <Grid.Column key={i}>
        <ProductItem
          product={product}
          onAddToCart={(count, productId) => {
            this.props.addItemsToCart(count, productId);
          }}
        />
      </Grid.Column>
    ));
  }
  render() {
    return (
      <Container style={{ paddingTop: 25, paddingBottom: 25 }}>
        <SemanticContainer style={{ textAlign: 'center', marginBottom: 50 }}>
          <Logo />
          <br />
          <Breadcrumb>
            <Breadcrumb.Section>
              <a href="/">Home</a>
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Products</Breadcrumb.Section>
          </Breadcrumb>
        </SemanticContainer>
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
  addItemsToCart
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array,
  addItemsToCart: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
