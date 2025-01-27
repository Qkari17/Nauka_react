import { useEffect, useState } from "react";

import { type ProductDto } from "../types/Product";
import { useParams } from "react-router-dom";
import { ProductsDetails } from "../features/Products/ProductsDetails";



export const ProductDetailsPage = () => {
const {id} = useParams();

  const [product, setProduct] = useState<ProductDto | null>(null);

  useEffect(() => {
    const recordId = id?.startsWith(":") ? id.slice(1) : id;
    fetch(`https://api.airtable.com/v0/apprgP8oINztLDp2n/products/${recordId}`, {
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
    {product &&  <ProductsDetails product={product}/>}
    </div>
  );
};
