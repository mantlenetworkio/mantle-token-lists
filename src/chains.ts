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
}
