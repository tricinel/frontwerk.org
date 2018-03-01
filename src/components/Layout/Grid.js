import styled from 'styled-components';

const unit = n => (typeof n === 'number' ? `${n}px` : n);

const size = props => {
  const cssProp =
    props.type && props.type === 'row'
      ? 'gridTemplateRows'
      : 'gridTemplateColumns';

  return {
    [cssProp]: props.template
      ? props.template
      : `repeat(auto-fit, minmax(${unit(props.size)}, 1fr))`
  };
};

const gap = props => ({
  gridGap: unit(props.gap)
});

const align = props => (props.align ? { alignItems: props.align } : null);

const Grid = styled.div([], { display: 'grid' }, size, gap, align);

export default Grid;
