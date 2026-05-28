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
  hoodi: {
    id: 560048,
    name: 'Hoodi',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://0xrpc.io/hoodi'
    ),
    layer: 1,
    pair: 'mantle-hoodi',
    bridge: '0x0B2333ecb334b2CBDA5C1eC6a54e86e895A4af86',
  },
  'mantle-hoodi': {
    id: 50002,
    name: 'mantle',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.hoodi.mantle.xyz'
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
  'hyperliquid-testnet': {
    id: 998,
    name: 'hyperliquid-testnet',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.hyperliquid-testnet.xyz/evm'
    ),
  },
  hyperliquid: {
    id: 999,
    name: 'hyperliquid',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.hyperliquid.xyz/evm'
    ),
  },
  'bsc-testnet': {
    id: 97,
    name: 'bsc-testnet',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://bsc-testnet.drpc.org'
    ),
  },
  bsc: {
    id: 56,
    name: 'bsc',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://bsc.drpc.org'
    ),
  },
  sepolia: {
    id: 11155111,
    name: 'sepolia',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://11155111.rpc.thirdweb.com'
    ),
    layer: 1,
    pair: 'mantle-sepolia',
    bridge: '0x21F308067241B2028503c07bd7cB3751FFab0Fb2',
  },
  'mantle-sepolia': {
    id: 5003,
    name: 'mantle',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.sepolia.mantle.xyz'
    ),
    layer: 2,
    pair: 'mantle',
    bridge: '0x4200000000000000000000000000000000000010',
  },
}
