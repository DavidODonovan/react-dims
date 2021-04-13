import styled from 'styled-components';

export const Grid=styled.div`
  height: 90vh;
  border: 1px solid red;
  display: grid;
  grid: 1fr
        2fr
        1fr/ 1fr 2fr 1fr;


  /* nothing to see here ~ just some font styling  */
  color: #fff;
  font-size: 1.2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 500;
`;

export const CoolThing=styled.div`
  background: orange;
  grid-area: 2/2/3/3;
  padding: 0.1rem;
`;

export const AnotherCoolThing=styled.div`
  background: blue;
  grid-area: 3/3/4/4;
  padding: 0.1rem;
`;
