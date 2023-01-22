import * as React from 'react';
import styled from 'styled-components';

export const StatBarGrid = styled.div`
  display: grid;
  background-color: lightblue;
  border: 1px solid red;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1em;
`;

export default function StatBar(): JSX.Element {
  return (
    <StatBarGrid>
      <span>
        <p>Volume (24h)</p>
        <p>1,250 xtz</p>
      </span>
      <span>
        <p>Volume (total)</p>
        <p>21,521 xtz</p>
      </span>
      <span>
        <p>Staked sDAO</p> <p>19,273,128 sDAO</p>
      </span>
      <span>
        <p>Staked SP</p> <p>871 SP</p>
      </span>
    </StatBarGrid>
  );
}
