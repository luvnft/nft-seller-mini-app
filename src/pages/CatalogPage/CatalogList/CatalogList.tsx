import { catalog } from "@/constants/catalog";
import { CatalogItem } from "./CatalogItem";

export function CatalogList() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {catalog.map((item, index) => (
        <CatalogItem data={item} key={index} />
      ))}
    </div>
  );
}
