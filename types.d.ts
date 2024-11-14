import { prices } from "./prices";

//type for the product and the new product
export interface Product {
  name: string;
  quantity: number;
  unit: string;
  price?: number; //undefined for the product in the grocery_list.json
}

export type Price = typeof prices;
