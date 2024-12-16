import { Address, toNano } from "@ton/core";
import { Nft } from "@/types/Nft";
import { useNftItem } from "@/hooks/contracts/useNftItem";
import { useTonConnect } from "@/hooks/useTonConnect";
import { CHAIN } from "@tonconnect/ui-react";

export function useNftTransfer(nft?: Nft) {
  const nftItem = useNftItem(nft?.address);
  const { sender, walletAddress, tonConnectUI, network } = useTonConnect();

  return {
    transfer: async (destination: Address) => {
      if (network === CHAIN.MAINNET) return;
      if (!destination) return;
      if (!nftItem) return;
      if (!walletAddress) return tonConnectUI.openModal();

      return await nftItem.sendTransfer(
        sender,
        {
          value: toNano("0.1"),
          bounce: true,
        },
        {
          queryId: BigInt(Date.now()),
          destination: destination,
          responseDestination: walletAddress,
          customPayload: null,
          forwardAmount: 0n,
          forwardPayload: null,
        },
      );
    },
    isLoading: !nftItem,
  };
}
