import styled from '@emotion/styled';

import { buttons } from '../../layouts/theme';
import { IButtonType } from '../../types';

interface IButton {
  type?: IButtonType;
}

const Button = styled.button`
  background-color: ${(props: IButton) =>
    buttons[props.type ? props.type : 'default'].bg};
  border-radius: 4px;
  border: 1px solid
    ${(props: IButton) => buttons[props.type ? props.type : 'default'].border};
  color: ${(props: IButton) =>
    buttons[props.type ? props.type : 'default'].color};
  cursor: pointer;
  padding: 16px 40px;

  :active,
  :focus,
  :hover {
    background-color: ${(props: IButton) =>
      buttons[props.type ? props.type : 'default'].color};
    color: ${(props: IButton) =>
      buttons[props.type ? props.type : 'default'].bg};
  }
`;

export default Button;
