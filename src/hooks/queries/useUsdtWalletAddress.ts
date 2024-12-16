import useSWR from "swr";
import { useTonConnect } from "../useTonConnect";
import { USDT_MASTER_ADDRESS } from "@/constants/ton";
import { Address, JettonMaster, TonClient } from "@ton/ton";

export function useUsdtWalletAddress() {
  const { walletAddress, tonClient } = useTonConnect();

  return useSWR<Address | undefined>(
    tonClient && walletAddress
      ? [walletAddress.toString(), tonClient, "usdtWalletAddress"]
      : null,
    async ([address, client]) => {
      const jettonMaster = (client as TonClient).open(
        new JettonMaster(USDT_MASTER_ADDRESS),
      );
      return await jettonMaster.getWalletAddress(Address.parse(address));
    },
  );
}
