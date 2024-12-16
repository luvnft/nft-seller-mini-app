import { Page } from "@/components/Page";
import { AddressForm } from "./AddressForm";

export function NftTransferPage() {
  return (
    <Page back={true} className="p-4">
      <AddressForm />
    </Page>
  );
}
