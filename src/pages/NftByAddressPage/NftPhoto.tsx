import { useCurrentNft } from "@/hooks/queries/useCurrentNft";

export function NftPhoto() {
  const nft = useCurrentNft();

  if (!nft) return;

  return (
    <img
      src={nft.meta.image}
      className="aspect-[4/3] w-full rounded-b-lg object-cover"
    />
  );
}
