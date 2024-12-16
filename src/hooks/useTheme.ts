import { themeParams, useSignal } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import { THEME, useTonConnectUI } from "@tonconnect/ui-react";

export function useTheme() {
  const [, setOptions] = useTonConnectUI();
  const isDark = useSignal(themeParams.isDark);

  useEffect(() => {
    if (isDark) {
      const root = window.document.documentElement;
      root.classList.add("dark");
    }

    setOptions({
      uiPreferences: {
        theme: themeParams.isDark() ? THEME.DARK : THEME.LIGHT,
      },
    });
  }, [isDark, setOptions]);
}
