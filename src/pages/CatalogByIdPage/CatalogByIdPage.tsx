import { Page } from "@/components/Page";
import { CatalogItemPhoto } from "./CatalogItemPhoto";
import { CatalogItemInfo } from "./CatalogItemInfo/CatalogItemInfo";

export function CatalogByIdPage() {
  return (
    <Page back>
      <CatalogItemPhoto />
      <div className="p-4">
        <CatalogItemInfo />
      </div>
    </Page>
  );
}
