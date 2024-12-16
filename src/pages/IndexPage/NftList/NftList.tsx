import { useNfts } from "@/hooks/queries/useNfts";
import { LoadingComponent } from "@/components/LoadingComponent";
import { ErrorComponent } from "@/components/ErrorComponent";
import { NftListEmpty } from "./NftListEmpty";
import { NftCard } from "./NftCard";

export function NftList() {
  const { data: nfts, isLoading, error } = useNfts();

  if (isLoading) return <LoadingComponent />;
  if (error) return <ErrorComponent />;
  if (!nfts?.length) return <NftListEmpty />;

  return (
    <div className="grid grid-cols-2 gap-2">
      {nfts.map((nft, index) => (
        <NftCard nft={nft} key={index} />
      ))}
    </div>
  );
}
