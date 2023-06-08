import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import ScrollToTop from "./components/ui/helpers/ScrollToTop.jsx";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";
import { CartProvider } from "./context/Context";

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
