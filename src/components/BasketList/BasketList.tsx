import { useSelector } from "react-redux";
import { remove, selectProducts } from "../../features/Products/basketSlice";
import { Button, Text } from "../../ui";
import { useAppDispatch } from "../../hooks/redux";

export const BasketList = () => {
  const products = useSelector(selectProducts); // Pobieranie produktów z reduxa
  const dispatch = useAppDispatch();

  return (
    <div>
      <Text>Twoje produkty w koszyku:</Text>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Text>
                {product.fields.name} ({product.fields.price.toString()} zł)
              </Text>
              <Button
                label="Usuń produkt"
                onClick={() => dispatch(remove(product.id))}
              ></Button>
            </li>
          ))}
        </ul>
      ) : (
        <Text>Koszyk jest pusty</Text>
      )}
    </div>
  );
};
