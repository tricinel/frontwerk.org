// @flow

import styled, { css } from 'styled-components';

import { breakpoints } from '../../layouts/theme';

type Props = {
  type: string,
  template: string,
  size: string | number,
  gap: string | number,
  align: string,
  templatemd: string
};

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

const cssProp = (props: Props): string =>
  props.type && props.type === 'row'
    ? 'grid-template-rows'
    : 'grid-template-columns';

const size = (props: Props): Object => ({
  [camelcase(cssProp(props))]: props.template
    ? props.template
    : `repeat(auto-fit, minmax(${unit(props.size)}, 1fr))`
});

const gap = (props: Props): Object => ({
  gridGap: unit(props.gap)
});

const align = (props: Props): Object | null =>
  props.align ? { alignItems: props.align } : null;

const media = (
  breakpoint: string,
  declaration: string,
  props: Props
): Array<Function | number | string> => css`
  @media screen and (min-width: ${breakpoints[breakpoint]}px) {
    ${cssProp(props)}: ${declaration};
  }
`;

const responsive = (props: Props): Array<Function | number | string> | null =>
  props.templatemd ? media('md', props.templatemd, props) : null;

// $FlowFixMe
const Grid = styled.div([], { display: 'grid' }, size, gap, align, responsive);

export default Grid;
