import React, { Component } from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import { MainHeader, SmallHeader } from 'components/headers';

import History from 'util/history';

import Container from 'components/Container';
import CallToActionBox from './components/CallToActionBox';

export class LandingPage extends Component {
  onShopNowButtonClick = () => History.push('/products');

  render() {
    return (
      <Container>
        <CallToActionBox>
          <Logo />
          <MainHeader style={{ margin: 0, height: 50 }}>
            Welcome to Glowing Parakeet.
          </MainHeader>
          <SmallHeader style={{ margin: 0, marginBottom: 25 }}>
            We&apos;re glad you found us.
          </SmallHeader>
          <Button
            onClick={this.onShopNowButtonClick}
          >
            SHOP NOW
          </Button>
        </CallToActionBox>
      </Container>
    );
  }

  componentDidMount() {}
}

export default LandingPage;
