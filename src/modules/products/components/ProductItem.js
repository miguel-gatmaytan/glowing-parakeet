import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import { ProductItemEntity } from '../entities';

import Button from 'components/Button';

export const ProductItem = (props) => {
  const productItem = new ProductItemEntity(props.product);
  const [count, setCount] = useState(0);
  return (
    <Card>
      <div
        style={{
          width: '100%',
          height: 250,
          backgroundImage: `url(${productItem.image})`,
          backgroundSize: 'cover',
        }}
      />
      <Card.Content>
        <Card.Header
          style={{
            height: 100,
            fontSize: 15,
          }}
          title={productItem.title}
        >
          {productItem.title}
        </Card.Header>
        <Card.Meta>
          <span>$ {productItem.price}</span>
        </Card.Meta>
        <Card.Description
          style={{ maxHeight: 50, height: 50, overflow: 'auto' }}
        >
          {productItem.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div style={{ paddingTop: 10, float: 'left' }}>
          <a
            style={{ marginRight: 5 }}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <Icon name="minus" />
          </a>
          <span>{count}</span>
          <a
            style={{ marginLeft: 5 }}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <Icon name="plus" />
          </a>
        </div>
        <Button
          style={{ float: 'right' }}
          onClick={() => {
            setCount(0);
            props.onAddToCart(count, productItem.id);
          }}
        >
          ADD TO CART
        </Button>
      </Card.Content>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductItem;
