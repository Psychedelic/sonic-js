/**
 * Default values used on Sonic-js library.
 */
export const Default = {
  // URL used for communicating with IC
  IC_HOST: 'https://boundary.ic0.app/',

  // Swap Canister Id
  SWAP_CANISTER_ID: '3xwpq-ziaaa-aaaah-qcn4a-cai',

  // Slippage percentage applied in transactions (0.5%)
  SLIPPAGE: 0.5,

  // Set to "development" to enable development features
  ENV: process?.env?.NODE_ENV || 'production',
};
