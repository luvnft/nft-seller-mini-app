import { useCurrentCatalogItem } from "@/hooks/queries/useCurrentCatalogItem";

export function CatalogItemPhoto() {
  const catalogItem = useCurrentCatalogItem();

  if (!catalogItem) return;

  return (
    <img
      src={catalogItem.image}
      className="aspect-[4/3] w-full rounded-b-lg object-cover"
    />
  );
}
