import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { CartRenderer } from 'modules/cart/components';

export const Overlay = () => (
  <Menu
    style={{ boxShadow: 'none', borderRadius: 0, margin: 0, width: '100%' }}
  >
    <Menu.Item name="Contact">+1 (888) 234 5678</Menu.Item>
    <Menu.Menu position="right">
      <Dropdown item icon="shopping cart" simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            <CartRenderer />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

export default Overlay;
