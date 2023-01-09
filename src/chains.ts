import { ethers } from 'ethers'

export const NETWORK_DATA = {
  ethereum: {
    id: 1,
    name: 'Mainnet',
    provider: new ethers.providers.InfuraProvider('homestead'),
    layer: 1,
    pair: 'optimism',
    bridge: '0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1',
  },
  goerli: {
    id: 5,
    name: 'Goerli',
    provider: new ethers.providers.InfuraProvider('goerli'),
    layer: 1,
    pair: 'mantle-goerli',
    bridge: '0x1050ec8fC7eB534c5Be07F4a0FF8641D821eE821',
  },
  'mantle-goerli': {
    id: 5001,
    name: 'mantle',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.testnet.mantlenetwork.io'
    ),
    layer: 2,
    pair: 'mantle',
    bridge: '0x4200000000000000000000000000000000000010',
  },
}
