import styled from 'styled-components';

export const Grid=styled.div`
  height: 100%;
  border: 1px solid red;
  display: grid;
  grid: 1fr
        2fr
        1fr/ 1fr 2fr 1fr;
`;

export const CoolThing=styled.div`
  background: orange;
  grid-area: 2/2/3/3;
`;

export const AnotherCoolThing=styled.div`
  background: blue;
  grid-area: 3/3/4/4;
`;
