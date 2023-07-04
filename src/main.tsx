import { Providers } from "./context/index.tsx";
import GlobalStyle from "./styles/global.ts";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />

      <App />
    </Providers>
  </React.StrictMode>
);
