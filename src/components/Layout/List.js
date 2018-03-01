import styled from 'styled-components';

const InlineList = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    list-style: none inside none;
    margin-bottom: 0;
    padding: 0 20px;
  }
`;

const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;

  li {
    display: block;
    margin: 5px 0;
    padding: 5px 0 5px 5px;
  }
`;

export { InlineList, List };
