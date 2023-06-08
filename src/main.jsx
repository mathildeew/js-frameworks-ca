import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import ScrollToTop from "./components/ui/helpers/ScrollToTop.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/Context";
import { Theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Theme>
          <GlobalStyle />
          <ScrollToTop />
          <App />
        </Theme>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
