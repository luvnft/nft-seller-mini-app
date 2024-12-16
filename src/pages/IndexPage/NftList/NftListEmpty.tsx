import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NftListEmpty() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center">You don't have any NFTs</p>

      <Button asChild>
        <Link to={"/catalog"}>Buy NFT</Link>
      </Button>
    </div>
  );
}
