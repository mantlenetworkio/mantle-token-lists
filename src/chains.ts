import { ethers } from 'ethers'

export const NETWORK_DATA = {
  ethereum: {
    id: 1,
    name: 'Mainnet',
    provider: new ethers.providers.InfuraProvider('homestead'),
    layer: 1,
    pair: 'optimism',
    bridge: '0x95fC37A27a2f68e3A647CDc081F0A89bb47c3012',
  },
  goerli: {
    id: 5,
    name: 'Goerli',
    provider: new ethers.providers.InfuraProvider('goerli'),
    layer: 1,
    pair: 'mantle-goerli',
    bridge: '0xc92470D7Ffa21473611ab6c6e2FcFB8637c8f330',
  },
  'mantle-goerli': {
    id: 5001,
    name: 'mantle',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.testnet.mantle.xyz'
    ),
    layer: 2,
    pair: 'mantle',
    bridge: '0x4200000000000000000000000000000000000010',
  },
  mantle: {
    id: 5000,
    name: 'mantle',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.mantle.xyz'
    ),
    layer: 2,
    pair: 'mantle',
    bridge: '0x4200000000000000000000000000000000000010',
  },
}
