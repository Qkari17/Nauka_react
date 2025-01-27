import { useEffect, useState } from "react";

import { type ProductDto } from "../types/Product";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../features/Products/ProductDetails";



export const ProductDetailsPage = () => {
const {id} = useParams();
console.log({id})
  const [product, setProduct] = useState<ProductDto | null>(null);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/apprgP8oINztLDp2n/products/${id}`, {
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
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
    {product &&  <ProductDetails product={product}/>}
    </div>
  );
};
