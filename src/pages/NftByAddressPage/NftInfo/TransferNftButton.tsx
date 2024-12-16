import { Button } from "@/components/ui/button";
import { useCurrentNft } from "@/hooks/queries/useCurrentNft";
import { Link } from "react-router-dom";

export function TransferNftButton() {
  const nft = useCurrentNft();

  if (!nft) return null;

  return (
    <Link to={"transfer"}>
      <Button className="w-full">Transfer NFT</Button>
    </Link>
  );
}
