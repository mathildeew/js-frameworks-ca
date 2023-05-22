import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BaseButton } from "../Basebutton.styles";
import { FetchApi } from "./FetchApi";
import { ProductsGrid } from "./ProductsGrid.styles";

export function Home() {
  return (
    <main>
      <h1>Home</h1>
      <FetchApi />
    </main>
  );
}
