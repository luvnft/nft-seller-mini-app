import { initData, useSignal } from "@telegram-apps/sdk-react";

export function useUser() {
  return useSignal(initData.user);
}
