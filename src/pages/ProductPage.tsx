
import { ProductList } from "../features/Products/ProductList";
import { type ProductDto } from "../types/Product";
import { AirtableListResponse, fetchProducts } from "../services/products";
import { useApi } from "../hooks/useApi";


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
  const { data, isLoading , isError} = useApi<AirtableListResponse<ProductDto[]>>(fetchProducts);

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
      {data && <ProductList products={data.records} />}
    </div>
  );
};
