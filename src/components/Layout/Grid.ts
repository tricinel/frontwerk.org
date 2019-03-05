import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { breakpoints } from '../../layouts/theme';

interface IProps {
  type?: string;
  template: string;
  size?: string | number;
  gap: string | number;
  align?: string;
  templatemd?: string;
}

const unit = (n: string | number): string =>
  typeof n === 'number' ? `${n}px` : n;

const capitalise = (str: string): string =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const firstToLower = (str: string): string =>
  `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

const camelcase = (str: string): string =>
  firstToLower(
    str
      .split('-')
      .map(capitalise)
      .join('')
  );

const cssProp = (props: IProps): string =>
  props.type && props.type === 'row'
    ? 'grid-template-rows'
    : 'grid-template-columns';

const size = (props: IProps): any => ({
  [camelcase(cssProp(props))]: props.template
    ? props.template
    : `repeat(auto-fit, minmax(${unit(props.size)}, 1fr))`
});

const gap = (props: IProps): any => ({
  gridGap: unit(props.gap)
});

const align = (props: IProps): any | null =>
  props.align ? { alignItems: props.align } : null;

const media = (
  breakpoint: string,
  declaration: string,
  props: IProps
): any => css`
  @media screen and (min-width: ${breakpoints[breakpoint]}px) {
    ${cssProp(props)}: ${declaration};
  }
`;

const responsive = (props: IProps): any =>
  props.templatemd ? media('md', props.templatemd, props) : null;

// $FlowFixMe
const Grid = styled('div')(
  [],
  { display: 'grid' },
  size,
  gap,
  align,
  responsive
);

export default Grid;
