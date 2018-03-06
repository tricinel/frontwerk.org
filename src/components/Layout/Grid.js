import styled, { css } from 'styled-components';

import { breakpoints } from '../../layouts/theme';

const unit = n => (typeof n === 'number' ? `${n}px` : n);

const capitalise = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const firstToLower = str => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
const camelcase = str =>
  firstToLower(
    str
      .split('-')
      .map(capitalise)
      .join('')
  );

const cssProp = props =>
  props.type && props.type === 'row'
    ? 'grid-template-rows'
    : 'grid-template-columns';

const size = props => ({
  [camelcase(cssProp(props))]: props.template
    ? props.template
    : `repeat(auto-fit, minmax(${unit(props.size)}, 1fr))`
});

const gap = props => ({
  gridGap: unit(props.gap)
});

const align = props => (props.align ? { alignItems: props.align } : null);

const media = (breakpoint, declaration, props) => css`
  @media screen and (min-width: ${breakpoints[breakpoint]}px) {
    ${cssProp(props)}: ${declaration};
  }
`;

const responsive = props =>
  props.templatemd ? media('md', props.templatemd, props) : null;

const Grid = styled.div([], { display: 'grid' }, size, gap, align, responsive);

export default Grid;
