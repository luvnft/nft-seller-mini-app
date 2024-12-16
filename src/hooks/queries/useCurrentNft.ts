import { useNfts } from "@/hooks/queries/useNfts";
import { useParams } from "react-router-dom";

export function useCurrentNft() {
  const { data: nfts } = useNfts();
  const { address } = useParams();

  if (!nfts || !address) return undefined;

  return nfts.find((x) => x.address.toString() === address);
}
