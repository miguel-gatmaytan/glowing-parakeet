import styled from 'styled-components';
import BACKGROUND from 'assets/img/background.jpg';

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-image: url(${BACKGROUND});
  background-size: cover;
  background-position-y: 50%;
`;

export default LandingPageContainer;
