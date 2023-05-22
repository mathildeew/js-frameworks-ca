import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/theme";
import App from "./App.jsx";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
