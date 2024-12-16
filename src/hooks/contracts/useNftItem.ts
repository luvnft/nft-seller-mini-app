import { Address, OpenedContract } from "@ton/core";
import { useTonConnect } from "../useTonConnect";
import { NftItem } from "@/wrappers/NftItem";
import { useInitialize } from "../utils/useInitialize";

export function useNftItem(
  address?: Address,
): OpenedContract<NftItem> | undefined {
  const { tonClient } = useTonConnect();

  const contract = useInitialize(() => {
    if (!tonClient) return;
    if (!address) return;

    return tonClient.open(NftItem.fromAddress(address));
  }, [tonClient]);

  return contract;
}
