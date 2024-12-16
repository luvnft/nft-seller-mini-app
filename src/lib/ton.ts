import { Address, fromNano as tonFromNano } from "@ton/core";
import { toUserFriendlyAddress } from "@tonconnect/ui-react";

export function fromMicro(value: bigint): number {
  return Number(value) / 1000000;
}

export function fromNano(value: bigint): number {
  return Number(tonFromNano(value));
}

export function sliceAddress(value: string): string {
  return value.slice(0, 3) + "…" + value.slice(-3);
}

export function toFriendlyAddress(value: Address): string {
  return toUserFriendlyAddress(value.toRawString());
}

export function getAddressFromDeepLink(str: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /ton:\/\/transfer\/([^\/\?]*)/;
  const match = str.match(regex);

  return match ? match[1] : null;
}

export function tryParseAddress(str: string) {
  try {
    const address = Address.parse(str);
    return address;
  } catch {
    return undefined;
  }
}
