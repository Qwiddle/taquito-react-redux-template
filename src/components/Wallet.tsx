import * as React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/redux.hooks';
import {
  connectWallet,
  disconnectWallet,
  getAccount,
  getConnected,
  setAccount,
} from '../slices/wallet';
import { WalletButton } from './WalletButton';

function Wallet() {
  const connected = useAppSelector(getConnected);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const retrieveAccount = async () => {
      const account = await dispatch(getAccount()).unwrap();
      if (account) await dispatch(setAccount(account));

      return account;
    };

    retrieveAccount()
      .then()
      .catch(e => {
        console.error(e);
      });
  }, []);

  const onConnect = async () => {
    try {
      await dispatch(connectWallet());
    } catch (err) {
      // dispatch createAlert
      console.log(err);
    }
  };

  const onDisconnect = async () => {
    try {
      await dispatch(disconnectWallet());
    } catch (err) {
      // dispatch createAlert
      console.log(err);
    }
  };

  return connected ? (
    <WalletButton onClick={() => onDisconnect()}>
      ✅ &nbsp; Disconnect
    </WalletButton>
  ) : (
    <WalletButton onClick={() => onConnect()}>
      🔴 &nbsp; Connect Wallet
    </WalletButton>
  );
}

export default Wallet;
