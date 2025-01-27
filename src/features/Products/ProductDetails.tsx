import {  ProductDto } from "../../types/Product";
import { Button, Text } from "../../ui";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "./basketSlice";



type Props= {
  product: ProductDto
}

export const ProductDetails = ({product}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Text>Product</Text>
 <p> {product.fields.name} ({product.fields.price.toString()}) zł</p>
 <Button label="+" onClick={() => dispatch(add(product))
    } className="ml-2"></Button>
    </div>
  );
};
