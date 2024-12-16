import { ConnectWalletButton } from "@/components/ConnectWalletButton";
import { useTonConnect } from "@/hooks/useTonConnect";
import { useIsConnectionRestored } from "@tonconnect/ui-react";
import { LoaderCircle } from "lucide-react";
import { Balance } from "./components/Balance";
import { UsdtBalance } from "./components/UsdtBalance";
import { Page } from "@/components/Page";

export function WalletPage() {
  const { walletAddress } = useTonConnect();
  const isConnectionRestored = useIsConnectionRestored();

  if (walletAddress) {
    return (
      <Page back className="space-y-4 p-4">
        <Balance />
        <UsdtBalance />
        <ConnectWalletButton />
      </Page>
    );
  }

  if (!isConnectionRestored) {
    return (
      <Page back className="p-4">
        <LoaderCircle className="mx-auto animate-spin" />
      </Page>
    );
  }

  return (
    <Page back className="p-4">
      <ConnectWalletButton />
    </Page>
  );
}
