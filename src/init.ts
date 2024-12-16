import {
  $debug,
  backButton,
  initData,
  init as initSDK,
  miniApp,
  postEvent,
  requestWriteAccess,
  swipeBehavior,
  themeParams,
  viewport,
} from "@telegram-apps/sdk-react";

export function init(debug: boolean) {
  $debug.set(debug);
  initSDK();

  miniApp.mount();
  themeParams.mount();
  void viewport
    .mount()
    .catch(() => console.error("Failed to mount viewport"))
    .then(() => {
      viewport.bindCssVars();
    });

  miniApp.ready();
  initData.restore();

  miniApp.bindCssVars();
  themeParams.bindCssVars();

  postEvent("web_app_expand");

  if (backButton.isSupported()) backButton.mount();
  if (requestWriteAccess.isAvailable()) requestWriteAccess();
  if (swipeBehavior.isSupported()) {
    swipeBehavior.mount();
    swipeBehavior.disableVertical();
  }
  if (miniApp.setHeaderColor.isAvailable())
    miniApp.setHeaderColor(themeParams.isDark() ? "#000000" : "#EFEFF4");
  if (miniApp.setBottomBarColor.isAvailable())
    miniApp.setBottomBarColor(themeParams.isDark() ? "#1b1b1d" : "#FFFFFF");

  if (debug) {
    import("eruda")
      .then((lib) => lib.default.init())
      .catch(() => console.error("Eruda failed to load"));
  }
}
