import { Product } from "../../types/Product";
import { Button, Text } from "../../ui";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";

const product: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 3000,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 150,
  },
  {
    id: 3,
    name: "Mouse",
    price: 70,
  },
];

export const ProductList = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Text>Product</Text>
      <ul>
        {product.map((product) => (
          <li key={product.id} className="flex gap-2 justify-center">
            <Text>
              {product.name} ({product.price.toString()}) zł
            </Text>
            <Button label="+" onClick={() => dispatch(add(product))
            } className="ml-2"></Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
