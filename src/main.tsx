import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./components/Root.tsx";
import "./index.css";
import { init } from "./init.ts";

init(import.meta.env.DEV);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
