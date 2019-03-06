import styled from '@emotion/styled';

import { breakpoints } from '../../layouts/theme';

interface IMainContainer {
  size?: number;
}

const MainContainer = styled.section`
  margin: 30px 0;
  max-width: ${(props: IMainContainer) => props.size || 640}px;
  padding: 0 20px;
  width: 100%;

  @media screen and (min-width: ${breakpoints.sm}px) {
    margin: 30px auto;
    max-width: ${(props: IMainContainer) => props.size || 768}px;
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    max-width: ${(props: IMainContainer) => props.size || 980}px;
  }
`;

export default MainContainer;
