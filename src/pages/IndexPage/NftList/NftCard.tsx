import { Nft } from "@/types/Nft";
import { Link } from "react-router-dom";

export function NftCard({ nft }: { nft: Nft }) {
  const { address, meta } = nft;

  return (
    <Link
      to={`/nft/${address}`}
      className="flex w-full flex-col overflow-hidden rounded-lg bg-card"
    >
      <img src={meta.image} className="aspect-square w-full object-cover" />
      <div className="flex flex-col p-2">
        <p className="line-clamp-2 text-base font-semibold">{meta.name}</p>
        <p className="line-clamp-3 text-sm text-tg-hint-foreground">
          {meta.description}
        </p>
      </div>
    </Link>
  );
}
