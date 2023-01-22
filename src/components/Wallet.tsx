import * as React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/redux.hooks';
import {
  connectWallet,
  disconnectWallet,
  getAccount,
  getConnected,
} from '../slices/wallet';

function Wallet() {
  const connected = useAppSelector(getConnected);
  const dispatch = useAppDispatch();

  console.log(connected);

  useEffect(() => {
    const retrieveAccount = async () => {
      await dispatch(getAccount()).unwrap();
    };

    retrieveAccount().catch(e => {
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
    <button type="submit" className="wallet" onClick={() => onDisconnect()}>
      <img src="images/user-check.svg" alt="user-connected" />
      &nbsp; Disconnect
    </button>
  ) : (
    <button type="submit" className="wallet" onClick={() => onConnect()}>
      <img src="images/user-x.svg" alt="user-disconnected" />
      &nbsp; Connect wallet
    </button>
  );
}

export default Wallet;
