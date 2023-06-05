import { Outlet } from "react-router-dom";
import Header from "../Layout/Header/";
import Footer from "../Layout/Footer/";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
