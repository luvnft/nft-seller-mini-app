import useSWR from "swr";
import { useTonConnect } from "../useTonConnect";
import { Address, TonClient } from "@ton/ton";

export function useWalletBalance() {
  const { walletAddress, tonClient } = useTonConnect();

  return useSWR<bigint | undefined>(
    tonClient && walletAddress
      ? [walletAddress.toString(), tonClient, "walletBalance"]
      : null,
    async ([address, client]) => {
      return await (client as TonClient).getBalance(Address.parse(address));
    },
  );
}
