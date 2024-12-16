import { Button } from "@/components/ui/button";
import { useTonConnect } from "@/hooks/useTonConnect";
import { fromNano } from "@/lib/ton";
import { useCurrentCatalogItem } from "@/hooks/queries/useCurrentCatalogItem";
import { TonIcon } from "@/components/ui/icons";
import { useTonPurchase } from "@/hooks/transactions/useTonPurchase";

export function PurchaseTonButton() {
  const catalogItem = useCurrentCatalogItem();
  const { connected, tonConnectUI } = useTonConnect();
  const { purchase, isLoading } = useTonPurchase(catalogItem);

  const onClick = () => {
    if (!catalogItem) return;
    if (!connected) return tonConnectUI.openModal();

    purchase();
  };

  if (!catalogItem) return null;

  return (
    <Button
      className="w-full bg-brand-ton"
      onClick={onClick}
      disabled={isLoading && connected}
    >
      <TonIcon /> {fromNano(catalogItem.price.ton).toFixed(2)}
    </Button>
  );
}
