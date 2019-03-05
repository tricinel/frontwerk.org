import styled from '@emotion/styled';

const SkipNavigation = styled.a`
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;

  :focus {
    height: auto;
    position: static;
    width: auto;
  }
`;

export default SkipNavigation;
