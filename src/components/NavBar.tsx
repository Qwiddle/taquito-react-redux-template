import * as React from 'react';
import Wallet from './Wallet';
import { Nav, NavItem, NavItems, Logo, A, NavEnd } from './Nav';
import { DAPP_NAME } from '../common/const';

const pages: string[] = ['dashboard', 'settings'];

export default function NavBar(): JSX.Element {
  return (
    <Nav>
      <Logo>{DAPP_NAME}</Logo>
      <NavItems>
        {pages.map(page => (
          <NavItem key={page}>
            <A href={`/${page}`}>{page}</A>
          </NavItem>
        ))}
      </NavItems>
      <NavEnd>
        <Wallet />
      </NavEnd>
    </Nav>
  );
}
