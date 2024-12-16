import { TonClient } from "@ton/ton";
import { createContext } from "react";

type TonClientContextProviderValue = {
  tonClient: TonClient | undefined;
};

const initialContext = {
  tonClient: undefined,
};

export const TonClientContext =
  createContext<TonClientContextProviderValue>(initialContext);
