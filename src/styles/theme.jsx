import { ThemeProvider } from "styled-components";
import "@fontsource/open-sans";

const theme = {
  color: {
    primary: `var(--color-primary)`,
    secondary: `var(--color-secondary)`,
    discount: `var(--color-discount)`,
  },
  font: {
    primary: "Open Sans, sans-serif",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
