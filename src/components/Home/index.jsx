import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BaseButton } from "../Basebutton.styles";
import HomeGrid from "./ProductsGrid";

export function Home() {
  return (
    <main>
      <h1>Home</h1>
      <HomeGrid />
    </main>
  );
}
