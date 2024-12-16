import { Page } from "@/components/Page";
import { TelegramProfileCard } from "./TelegramProfileCard/TelegramProfileCard";
import { NftList } from "./NftList/NftList";

export function IndexPage() {
  return (
    <Page className="flex flex-col gap-y-4 p-4">
      <TelegramProfileCard />
      <NftList />
    </Page>
  );
}
