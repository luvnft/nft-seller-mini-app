import { getHttpEndpoint } from "@orbs-network/ton-access";
import { CHAIN } from "@tonconnect/ui-react";
import { PropsWithChildren } from "react";
import { TonClient } from "@ton/ton";
import { useTonConnect } from "@/hooks/useTonConnect";
import { useAsyncInitialize } from "@/hooks/utils/useAsyncInitialize";
import { TonClientContext } from "@/contexts/TonClientContext";

export function TonClientProvider({ children }: PropsWithChildren) {
  const { network } = useTonConnect();

  const client = useAsyncInitialize(async () => {
    if (!network) return;

    const endpoint = await getHttpEndpoint({
      network: network === CHAIN.MAINNET ? "mainnet" : "testnet",
    });

    return new TonClient({ endpoint });
  }, [network]);

  return (
    <TonClientContext.Provider value={{ tonClient: client }}>
      {children}
    </TonClientContext.Provider>
  );
}
