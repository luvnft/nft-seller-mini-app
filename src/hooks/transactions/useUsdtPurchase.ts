import { COLLECTION_ADDRESS } from "@/constants/ton";
import { useUsdtWallet } from "@/hooks/contracts/useUsdtWallet";
import { useTonConnect } from "@/hooks/useTonConnect";
import { CatalogItem } from "@/types/CatalogItem";
import { storeMint } from "@/wrappers/Collection";
import { Address, beginCell, toNano } from "@ton/core";
import { CHAIN } from "@tonconnect/ui-react";

export function useUsdtPurchase(catalogItem?: CatalogItem) {
  const jettonWallet = useUsdtWallet();
  const { sender, walletAddress, network } = useTonConnect();

  return {
    purchase: async () => {
      if (network === CHAIN.MAINNET) return;
      if (!walletAddress) return;
      if (!jettonWallet) return;
      if (!catalogItem) return;

      return await jettonWallet.sendTokenTransfer(
        sender,
        {
          value: toNano("0.14"),
          bounce: true,
        },
        {
          amount: catalogItem.price.usdt,
          queryId: BigInt(Date.now()),
          destination: Address.parse(COLLECTION_ADDRESS),
          responseDestination: walletAddress,
          customPayload: null,
          forwardAmount: toNano("0.1"),
          forwardPayload: beginCell()
            .store(
              storeMint({
                catalogItemIndex: catalogItem.index,
              }),
            )
            .endCell(),
        },
      );
    },
    isLoading: !jettonWallet,
  };
}
