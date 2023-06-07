import { Routes, Route } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./components/Home";
import Product from "./components/Product/index";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import NotFound from "./components/Notfound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="product/:id" element={<Product />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkoutsuccess" element={<Checkout />}></Route>
        <Route path="contactus" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}
