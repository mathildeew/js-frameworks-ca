import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home/index";
import { Product } from "./components/Product/index";

function Cart() {
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}

function CheckoutSuccess() {
  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
}

function RouteNotFound() {
  return (
    <div>
      <h1>Page not found</h1>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="product/:id" element={<Product />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkoutsuccess" element={<CheckoutSuccess />}></Route>
        <Route path="contactus" element={<Contact />}></Route>
        <Route path="*" element={<RouteNotFound />}></Route>
      </Route>
    </Routes>
  );
}
