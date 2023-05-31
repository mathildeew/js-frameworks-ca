import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/theme";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import { Context } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <Theme>
          <GlobalStyle />
          <App />
        </Theme>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);
