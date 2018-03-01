import styled from 'styled-components';

const MainContainer = styled.main`
  margin: 30px auto;
  max-width: ${props => (props.size ? props.size : 640)}px;
  padding: 0 20px;
  width: 100%;

  @media screen and (min-width: 1500px) {
    max-width: ${props => (props.size ? props.size : 980)}px;
  }
`;

export default MainContainer;
