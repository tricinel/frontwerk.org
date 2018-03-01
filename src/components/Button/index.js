import styled from 'styled-components';

import { buttons } from '../../layouts/theme';

const Button = styled.button`
  background-color: ${props => buttons[props.type ? props.type : 'default'].bg};
  border-radius: 4px;
  border: 1px solid
    ${props => buttons[props.type ? props.type : 'default'].border};
  color: ${props => buttons[props.type ? props.type : 'default'].color};
  cursor: pointer;
  padding: 16px 40px;

  :active,
  :focus,
  :hover {
    background-color: ${props =>
      buttons[props.type ? props.type : 'default'].color};
    color: ${props => buttons[props.type ? props.type : 'default'].bg};
  }
`;

export default Button;
