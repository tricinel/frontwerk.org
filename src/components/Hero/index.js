import styled from 'styled-components';

const Hero = styled.section`
  background-color: ${props => props.theme.banner};
  color: ${props => props.theme.bannerColor};
  padding: ${props => (props.large ? '100px' : '50px')} 0;
  text-align: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border: 0;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-bottom: 0;
  }
`;

export default Hero;
