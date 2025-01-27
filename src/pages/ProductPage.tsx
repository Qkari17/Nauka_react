import { useEffect, useState } from "react";
import { ProductList } from "../features/Products/ProductList";
import { type ProductDto } from "../types/Product";
import { fetchProducts } from "../services/products";


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
  const [data, setData] = useState<ProductDto []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    
      fetchProducts().then((responseData) => {setData(responseData.records)
        setIsLoading(false);
      }).catch(()=> {
        setIsError(true)
      });
  }, []);

  return (
    <div>
        {isLoading && <p className="text-white">Loading...</p>}
        {isError && <p className="text-white">Oh no! Error!</p>}
      <ProductList products={data} />
    </div>
  );
};
