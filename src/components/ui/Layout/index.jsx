import { Outlet } from "react-router-dom";
import Header from "../Layout/Header/";
import Footer from "../Layout/Footer/";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Layout() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="icon" type="image/svg+xml" href="/images/logo-sm.svg" />
        </Helmet>
      </HelmetProvider>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
