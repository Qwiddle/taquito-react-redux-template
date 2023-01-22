import * as React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getSwaps } from '../../api/swaps';

export const SwapTable = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr;
  grid-gap: var(--css-grid-table-gap);

  justify-content: center;
`;

export const SwapTableHeader = styled.div`
  text-transform: capitalize;
  font-weight: 600;
`;

export const SwapTableCell = styled.div`
  background-color: white;
  padding: 1px;
  display: flex;
  align-items: center;
  overflow: hidden;

  &.center {
    justify-content: center;
  }
`;

export default function Swaps(): JSX.Element {
  const { isLoading, error, data } = useQuery('swaps', getSwaps);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred</p>;

  return (
    <SwapTable>
      <SwapTableHeader>time</SwapTableHeader>
      <SwapTableHeader>account</SwapTableHeader>
      <SwapTableHeader>swap</SwapTableHeader>
      <SwapTableHeader>amount</SwapTableHeader>

      <SwapTableCell className="center">5m ago</SwapTableCell>
      <SwapTableCell className="center">tz1RL..</SwapTableCell>
      <SwapTableCell className="center">1x Manchester Untd.</SwapTableCell>
      <SwapTableCell className="center">100 tez</SwapTableCell>

      <SwapTableCell className="center">35m ago</SwapTableCell>
      <SwapTableCell className="center">tz1RL..</SwapTableCell>
      <SwapTableCell className="center">1x Manchester Untd.</SwapTableCell>
      <SwapTableCell className="center">100 tez</SwapTableCell>

      <SwapTableCell className="center">4h ago</SwapTableCell>
      <SwapTableCell className="center">tz1RL..</SwapTableCell>
      <SwapTableCell className="center">1x Manchester Untd.</SwapTableCell>
      <SwapTableCell className="center">100 tez</SwapTableCell>
    </SwapTable>
  );
}
