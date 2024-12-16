import { useTonConnect } from "@/hooks/useTonConnect";
import { LoaderCircle } from "lucide-react";
import { UsdtIcon } from "@/components/ui/icons";
import { useUsdtWalletBalance } from "@/hooks/queries/useUsdtWalletBalance";
import { fromMicro } from "@/lib/ton";

export function UsdtBalance() {
  const { data: balance, isLoading } = useUsdtWalletBalance();
  const { walletAddress } = useTonConnect();

  if (!walletAddress) return null;

  return (
    <div className="flex flex-row items-center justify-between rounded-lg bg-card p-4">
      <div className="flex flex-row items-center gap-2">
        <div className="flex aspect-square w-12 items-center justify-center rounded-full bg-brand-usdt">
          <UsdtIcon className="size-8 text-white" />
        </div>

        <p className="font-semibold">USDT</p>
      </div>

      {isLoading || balance === undefined ? (
        <LoaderCircle className="size-6 animate-spin" />
      ) : (
        <p>{fromMicro(balance ?? 0n).toFixed(2)}</p>
      )}
    </div>
  );
}
