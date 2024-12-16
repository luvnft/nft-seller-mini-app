import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { TONCONNECT_MANIFEST } from "@/constants/ton";
import { App } from "./App";
import { TonClientProvider } from "@/providers/TonClientProvider";

export function Root() {
  return (
    <TonConnectUIProvider manifestUrl={TONCONNECT_MANIFEST}>
      <TonClientProvider>
        <App />
      </TonClientProvider>
    </TonConnectUIProvider>
  );
}
