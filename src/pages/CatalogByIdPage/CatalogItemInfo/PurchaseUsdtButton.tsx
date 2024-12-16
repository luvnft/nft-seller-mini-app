import { Button } from "@/components/ui/button";
import { UsdtIcon } from "@/components/ui/icons";
import { useCurrentCatalogItem } from "@/hooks/queries/useCurrentCatalogItem";
import { useUsdtPurchase } from "@/hooks/transactions/useUsdtPurchase";
import { useTonConnect } from "@/hooks/useTonConnect";
import { fromMicro } from "@/lib/ton";

export function PurchaseUsdtButton() {
  const catalogItem = useCurrentCatalogItem();
  const { connected, tonConnectUI } = useTonConnect();
  const { purchase, isLoading } = useUsdtPurchase(catalogItem);

  const onClick = () => {
    if (!catalogItem) return;
    if (!connected) return tonConnectUI.openModal();

    purchase();
  };

  if (!catalogItem) return null;

  return (
    <Button
      className="w-full bg-brand-usdt"
      onClick={onClick}
      disabled={isLoading && connected}
    >
      <UsdtIcon /> {fromMicro(catalogItem.price.usdt).toFixed(2)}
    </Button>
  );
}
