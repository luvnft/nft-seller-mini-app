import { useParams } from "react-router-dom";
import { catalog } from "@/constants/catalog";

export function useCurrentCatalogItem() {
  const { id } = useParams();

  if (!id) return undefined;

  return catalog.find((x) => x.index === BigInt(id));
}
