export interface Token {
  address: string
  overrides?: {
    bridge?: string
    name?: string
    symbol?: string
    decimals?: number
  }
}

export interface TokenData {
  nonstandard?: boolean
  nobridge?: boolean
  twitter?: string
  name: string
  symbol: string
  decimals: number
  description: string
  website: string
  tokens: {
    ethereum?: Token
    'mantle-goerli'?: Token
    goerli?: Token
    sepolia?: Token
    'mantle-sepolia'?: Token
  }
  tickers?: {
    coingecko?: string
  }
  extensions?: {
    thirdparty?: {
      name: string
      url: string
    }
  }
}

export interface ValidationResult {
  type: 'error' | 'warning'
  message: string
}
