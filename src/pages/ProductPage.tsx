import { ProductList } from "../features/Products/ProductList";

import {  fetchProducts } from "../services/products";

import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useQuery } from "@tanstack/react-query";

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
  // const [data, setData] = useState<ProductDto []>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const { data, isLoading, isError } =
  //   useApi<AirtableListResponse<ProductDto[]>>(fetchProducts);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // useEffect(() => {

  //     fetchProducts().then((responseData) => {setData(responseData.records)
  //       setIsLoading(false);
  //     }).catch(()=> {
  //       setIsError(true)
  //     });
  // }, []);

  return (
    <div>
      {isLoading && <p className="text-white">Loading...</p>}
      {isError && <p className="text-white">Oh no! Error!</p>}
      <div>
        <Link to={routes.CREATE_PRODUCT.path} className="text-cyan-400">
          Create product
        </Link>
      </div>
      {data && <ProductList products={data.records} />}
    </div>
  );
};
