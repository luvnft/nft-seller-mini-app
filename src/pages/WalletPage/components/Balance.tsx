import { useTonConnect } from "@/hooks/useTonConnect";
import { toFriendlyAddress, sliceAddress, fromNano } from "@/lib/ton";
import { LoaderCircle } from "lucide-react";
import { TonIcon } from "@/components/ui/icons";
import { useWalletBalance } from "@/hooks/queries/useWalletBalance";

export function Balance() {
  const { data: balance, isLoading } = useWalletBalance();
  const { walletAddress } = useTonConnect();

  if (!walletAddress) return null;

  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg bg-card p-4">
      {isLoading || balance === undefined ? (
        <LoaderCircle className="size-10 animate-spin" />
      ) : (
        <h1 className="text-4xl font-semibold">
          {fromNano(balance ?? 0n).toFixed(2)}
          <TonIcon className="ml-2 inline text-tg-hint-foreground" />
        </h1>
      )}
      <p className="text-tg-hint-foreground">
        {sliceAddress(toFriendlyAddress(walletAddress))}
      </p>
    </div>
  );
}
