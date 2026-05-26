export const ADDRESS_TYPE = {
  type: 'string',
  minLength: 42,
  maxLength: 42,
}

export const TOKEN_SCHEMA = {
  type: 'object',
  properties: {
    address: ADDRESS_TYPE,
    adapter: ADDRESS_TYPE,
    overrides: {
      bridge: ADDRESS_TYPE,
      name: {
        type: 'string',
      },
      symbol: {
        type: 'string',
      },
      decimals: {
        type: 'integer',
      },
    },
  },
  additionalProperties: false,
  required: ['address'],
}

export const TOKEN_DATA_SCHEMA = {
  type: 'object',
  properties: {
    nonstandard: {
      type: 'boolean',
    },
    nobridge: {
      type: 'boolean',
    },
    name: {
      type: 'string',
    },
    symbol: {
      type: 'string',
    },
    decimals: {
      type: 'integer',
    },
    description: {
      type: 'string',
      minLength: 1,
      maxLength: 150,
    },
    website: {
      type: 'string',
      format: 'uri',
    },
    twitter: {
      type: 'string',
    },
    tokens: {
      type: 'object',
      properties: {
        ethereum: TOKEN_SCHEMA,
        mantle: TOKEN_SCHEMA,
        hoodi: TOKEN_SCHEMA,
        'mantle-hoodi': TOKEN_SCHEMA,
        sepolia: TOKEN_SCHEMA,
        'mantle-sepolia': TOKEN_SCHEMA,
        bsc: TOKEN_SCHEMA,
        'bsc-testnet': TOKEN_SCHEMA,
        hyperliquid: TOKEN_SCHEMA,
        'hyperliquid-testnet': TOKEN_SCHEMA,
      },
      additionalProperties: false,
    },
    tickers: {
      type: 'object',
      properties: {
        coingecko: { type: 'string' },
      },
      additionalProperties: false,
    },
    extensions: {
      type: 'object',
      properties: {
        thirdparty: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            url: { type: 'string' },
          },
        },
        external: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            url: { type: 'string' },
          },
        },
        oft: { type: 'boolean' },
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
  required: ['name', 'symbol', 'decimals', 'tokens', 'description', 'website'],
}

module.exports = {
  TOKEN_DATA_SCHEMA,
}
