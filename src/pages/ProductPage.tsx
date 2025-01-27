import { useEffect, useState } from "react";
import { ProductList } from "../features/Products/ProductList";
import { type ProductDto } from "../types/Product";


// const products: Product[] = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 3000,
//   },
//   {
//     id: 2,
//     name: "Keyboard",
//     price: 150,
//   },
//   {
//     id: 3,
//     name: "Mouse",
//     price: 70,
//   },

export const ProductPage = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    fetch("https://api.airtable.com/v0/apprgP8oINztLDp2n/products", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Invalid response");
      })
      .then((data) => setProducts(data.records));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};
