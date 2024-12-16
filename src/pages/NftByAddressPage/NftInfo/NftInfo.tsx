import { TransferNftButton } from "./TransferNftButton";
import { useCurrentNft } from "@/hooks/queries/useCurrentNft";

export function NftInfo() {
  const nft = useCurrentNft();

  if (!nft) return null;

  return (
    <div className="m-4 flex flex-col gap-4 rounded-lg bg-card p-4">
      <div>
        <h1 className="text-2xl font-semibold">{nft.meta.name}</h1>
        <p className="text-tg-hint-foreground text-base">
          {nft.meta.description}
        </p>
      </div>
      <TransferNftButton />
    </div>
  );
}
