import { DAppClientOptions, NetworkType } from '@airgap/beacon-sdk';

export const DAPP_NAME: string = 'ArtDEX+';
export const DAPP_ICON_URL: string = 'https://tezostaquito.io/img/favicon.svg';

export const DEFAULT_RPC: string = 'https://rpc.ghostnet.teztnets.xyz/';
export const DEFAULT_NETWORK_TYPE: NetworkType = NetworkType.GHOSTNET;

export const dappOptions: DAppClientOptions = {
  iconUrl: DAPP_ICON_URL,
  preferredNetwork: DEFAULT_NETWORK_TYPE,
  name: DAPP_NAME,
};
