import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeContainer from "./HomeContainer";

export function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/src/assets/logo-sm.svg"
          />
          <title>Sjåpp - Online shop</title>
        </Helmet>
        <HomeContainer />
      </HelmetProvider>
    </>
  );
}
