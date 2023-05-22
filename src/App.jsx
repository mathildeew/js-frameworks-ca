import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/index";

function Footer() {
  return <footer>THis is footer</footer>;
}

function Home() {
  return <h1>Home</h1>;
}

function Product() {
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}

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

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
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
        <Route path="product" element={<Product />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkoutsuccess" element={<CheckoutSuccess />}></Route>
        <Route path="contactus" element={<Contact />}></Route>
        <Route path="*" element={<RouteNotFound />}></Route>
      </Route>
    </Routes>
  );
}
