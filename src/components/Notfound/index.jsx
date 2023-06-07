import { Helmet, HelmetProvider } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sjåpp - Page not found</title>
        </Helmet>
      </HelmetProvider>

      <section>
        <h1>Page not found</h1>
      </section>
    </>
  );
}
