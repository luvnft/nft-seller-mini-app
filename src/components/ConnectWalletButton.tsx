import { Button } from "@/components/ui/button";
import { useTonConnect } from "@/hooks/useTonConnect";
import { cn } from "@/lib/utils";
import { useIsConnectionRestored } from "@tonconnect/ui-react";
import { LoaderCircle } from "lucide-react";
import { TonIcon } from "./ui/icons";

export function ConnectWalletButton({ className }: { className?: string }) {
  const { tonConnectUI, walletAddress } = useTonConnect();
  const isConnectionRestored = useIsConnectionRestored();

  const onConnectClick = () => {
    tonConnectUI.openModal();
  };

  const onDisconnectClick = () => {
    tonConnectUI.disconnect();
  };

  if (walletAddress) {
    return (
      <Button className={cn("w-full", className)} onClick={onDisconnectClick}>
        <TonIcon />
        Disconnect Wallet
      </Button>
    );
  }

  if (!isConnectionRestored) {
    return (
      <Button
        className={cn("text-tg-hint-foreground w-full bg-card", className)}
      >
        <LoaderCircle className="animate-spin" />
      </Button>
    );
  }

  return (
    <Button className={cn("w-full", className)} onClick={onConnectClick}>
      <TonIcon />
      Connect Wallet
    </Button>
  );
}
