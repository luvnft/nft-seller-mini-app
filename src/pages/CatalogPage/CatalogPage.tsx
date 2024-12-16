import { Page } from "@/components/Page";
import { CatalogList } from "./CatalogList/CatalogList";

export function CatalogPage() {
  return (
    <Page back={true} className="p-4">
      <CatalogList />
    </Page>
  );
}
