import {  ProductDto } from "../../types/Product";
import { Button, Text } from "../../ui";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";
import { Link } from "react-router-dom";


type Props= {
  products: ProductDto[]
}

export const ProductList = ({products}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Text>Product</Text>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex gap-2 justify-center">
            <Link to={`/products/:${product.id}`} className="text-cyan-500">
              {product.fields.name} ({product.fields.price.toString()}) zł
            </Link>
            <Button label="+" onClick={() => dispatch(add(product))
            } className="ml-2"></Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
