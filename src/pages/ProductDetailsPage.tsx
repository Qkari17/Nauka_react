import { useEffect, useState } from "react";

import { type ProductDto } from "../types/Product";
import { useParams } from "react-router-dom";
import { ProductsDetails } from "../features/Products/ProductsDetails";
import { fetchProduct } from "../services/products";

export const ProductDetailsPage = () => {
  const { id } = useParams();

  const [data, setData] = useState<ProductDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (id) {
      const recordId = id?.startsWith(":") ? id.slice(1) : id;
      fetchProduct(recordId).then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      }).catch(()=> {
        setIsError(true)
      });
    }
  }, [id]);

  return (
    <div>
      {isLoading && <p className="text-white">Loading...</p>}
      {isError && <p className="text-white">Oh no! Error!</p>}
      {data && <ProductsDetails product={data} />}
    </div>
  );
};
