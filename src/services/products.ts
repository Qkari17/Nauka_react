import { CreateProductDto, ProductDto } from "../types/Product";
export type AirtableListResponse<T> = {
  records: T;
};

const API_BASE_URL = `https://api.airtable.com/v0/apprgP8oINztLDp2n`;
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  "Content-type": "application/json",
};
export const fetchProducts = (): Promise<
  AirtableListResponse<ProductDto[]>
> => {
  return fetch(`${API_BASE_URL}/products`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};

export const fetchProduct = (recordId: string) => {
  return fetch(`${API_BASE_URL}/products/${recordId}`, {
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};

export const createProduct = (data: CreateProductDto): Promise<void> => {
  return fetch(`${API_BASE_URL}/products`, {
    headers,
    method: `POST`,
    body: JSON.stringify({ records: [{ fields: data }] }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Invalid response");
  });
};

