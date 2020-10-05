import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import { ProductItemEntity } from '../entities';

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
        <Card.Header style={{ height: 50 }}>{productItem.title}</Card.Header>
        <Card.Meta>
          <span>{productItem.price}</span>
        </Card.Meta>
        <Card.Description
          style={{ maxHeight: 50, height: 50, overflow: 'auto' }}
        >
          {productItem.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          onClick={() => {
            setCount(count - 1);
          }}
        >
          <Icon name="minus" />
        </a>
        {count}
        <a
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <Icon name="plus" />
        </a>
      </Card.Content>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
