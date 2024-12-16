import { useTonConnect } from "../useTonConnect";
import { JettonWallet } from "@/wrappers/JettonWallet";
import { useUsdtWalletAddress } from "../queries/useUsdtWalletAddress";
import { useInitialize } from "../utils/useInitialize";

export function useUsdtWallet() {
  const { tonClient } = useTonConnect();
  const { data: usdtWalletAddress } = useUsdtWalletAddress();

  const contract = useInitialize(() => {
    if (!tonClient) return;
    if (!usdtWalletAddress) return;

    return tonClient.open(JettonWallet.fromAddress(usdtWalletAddress));
  }, [tonClient, usdtWalletAddress]);

  return contract;
}
