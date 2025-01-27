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
