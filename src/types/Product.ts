import { z } from "zod";

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type ProductDto = {
  id: string;
  fields: {
    name: string;
    desciptrion: string;
    price: number;
    create_at: Date;
    update_at: Date;
  };
};

export type CreateProductDto = {
  name: string;
  description: string;
  price: number;
};

export const createProductShema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  description: z.string().min(3, "Description is required"),
  price: z.number().min(1, { message: "Price must be grater then 0" }),
});
