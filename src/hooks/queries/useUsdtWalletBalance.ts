import useSWR from "swr";
import { useTonConnect } from "../useTonConnect";
import { Address, TonClient } from "@ton/ton";
import { useUsdtWalletAddress } from "./useUsdtWalletAddress";

export function useUsdtWalletBalance() {
  const { tonClient } = useTonConnect();
  const { data: usdtWalletAddress } = useUsdtWalletAddress();

  return useSWR<bigint | undefined>(
    tonClient && usdtWalletAddress
      ? [usdtWalletAddress.toString(), tonClient, "usdtWalletBalance"]
      : null,
    async ([address, client]) => {
      return await (client as TonClient).getBalance(Address.parse(address));
    },
  );
}
