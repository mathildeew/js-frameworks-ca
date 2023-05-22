import { useState, useEffect } from "react";

export function Home() {
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();

        setIsLoading(false);
        setProducts(json);
        console.log(json);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>There's an error with the site</div>;
  }

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
