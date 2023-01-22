/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountInfo, BeaconError, NetworkType } from '@airgap/beacon-sdk';
import { requestPermissions, clearActiveAccount, beacon } from '../api/wallet';
import type { RootState } from '../store/configureStore';

interface Network {
  rpcUrl: string;
  networkType: NetworkType;
}

interface WalletState {
  connected: boolean;
  account: AccountInfo | undefined;
  network: Network | null;
}

const initialState: WalletState = {
  account: undefined,
  connected: false,
  network: null,
};

export const getAccount = createAsyncThunk(
  'wallet/account/get',
  async (any, { rejectWithValue }) => {
    try {
      const account = await beacon.client.getActiveAccount();
      return account;
    } catch (err) {
      return rejectWithValue({
        message: err,
      });
    }
  },
);

export const connectWallet = createAsyncThunk(
  'wallet/connect',
  async (any, { rejectWithValue }) => {
    try {
      const account = await requestPermissions();
      return account;
    } catch (err) {
      const error = err as BeaconError;

      return rejectWithValue({
        message: error.description,
      });
    }
  },
);

export const disconnectWallet = createAsyncThunk(
  'wallet/disconnect',
  async (any, { rejectWithValue }) => {
    try {
      return await clearActiveAccount();
    } catch (err) {
      return rejectWithValue({
        message: err,
      });
    }
  },
);

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setConnection: (state: any, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
    setAccount: (state: any, action: PayloadAction<AccountInfo>) => {
      state.account = action.payload;
      if (!state.connected) state.connected = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(connectWallet.fulfilled, (state, action) => {
        state.connected = true;
        state.account = action.payload;
      })
      .addCase(disconnectWallet.fulfilled, state => {
        state.connected = false;
        state.account = undefined;
      })
      .addCase(getAccount.fulfilled, (state, action) => {
        state.account = action.payload;
      });
  },
});

export const { setConnection, setAccount } = walletSlice.actions;

export const getUserAccount = (state: RootState) => state.wallet.account;
export const getConnected = (state: RootState) => state.wallet.connected;
export const getNetwork = (state: RootState) => state.wallet.network;

export default walletSlice.reducer;
