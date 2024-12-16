import { NftInfo } from "./NftInfo/NftInfo";
import { NftPhoto } from "./NftPhoto";
import { useCurrentNft } from "@/hooks/queries/useCurrentNft";
import { Page } from "@/components/Page";

export function NftByAddressPage() {
  const nft = useCurrentNft();

  if (!nft) return null;

  return (
    <Page back={true}>
      <NftPhoto />
      <NftInfo />
    </Page>
  );
}
