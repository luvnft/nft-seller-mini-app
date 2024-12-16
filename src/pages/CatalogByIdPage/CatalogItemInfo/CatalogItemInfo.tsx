import { useCurrentCatalogItem } from "@/hooks/queries/useCurrentCatalogItem";
import { PurchaseTonButton } from "./PurchaseTonButton";
import { PurchaseUsdtButton } from "./PurchaseUsdtButton";

export function CatalogItemInfo() {
  const catalogItem = useCurrentCatalogItem();

  if (!catalogItem) return null;

  return (
    <div className="space-y-4 rounded-lg bg-card p-4">
      <div>
        <h1 className="text-2xl font-semibold">{catalogItem.name}</h1>
        <p className="text-base text-tg-hint-foreground">
          {catalogItem.description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <PurchaseTonButton />
        <PurchaseUsdtButton />
      </div>
    </div>
  );
}
