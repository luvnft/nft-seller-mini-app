import { Collection } from "@/wrappers/Collection";
import { Address, OpenedContract } from "@ton/core";
import { useTonConnect } from "../useTonConnect";
import { useInitialize } from "../utils/useInitialize";

export function useCollection(
  address?: Address,
): OpenedContract<Collection> | undefined {
  const { tonClient } = useTonConnect();

  const contract = useInitialize(() => {
    if (!tonClient) return;
    if (!address) return;

    return tonClient.open(Collection.fromAddress(address));
  }, [tonClient]);

  return contract;
}
