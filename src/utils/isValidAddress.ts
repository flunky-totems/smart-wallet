/**
 * Checks whether a string is a valid Ethereum address.
 */
export function isValidAddress(address: string): boolean {
  if (typeof address !== 'string') {
    return false;
  }

  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
