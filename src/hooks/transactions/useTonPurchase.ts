import { useTonConnect } from "@/hooks/useTonConnect";
import { CatalogItem } from "@/types/CatalogItem";
import { useCollection } from "@/hooks/contracts/useCollection";
import { Address } from "@ton/core";
import { COLLECTION_ADDRESS } from "@/constants/ton";
import { CHAIN } from "@tonconnect/ui-react";

export function useTonPurchase(catalogItem?: CatalogItem) {
  const collection = useCollection(Address.parse(COLLECTION_ADDRESS));
  const { sender, walletAddress, network } = useTonConnect();

  return {
    purchase: async () => {
      if (network === CHAIN.MAINNET) return;
      if (!walletAddress) return;
      if (!collection) return;
      if (!catalogItem) return;

      return await collection.sendMint(
        sender,
        {
          value: catalogItem.price.ton,
          bounce: true,
        },
        {
          catalogItemIndex: catalogItem.index,
        },
      );
    },
    isLoading: !collection,
  };
}
