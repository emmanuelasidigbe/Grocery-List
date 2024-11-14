import { calculateProductPrice } from "./main";
import { prices } from "./prices";
import { Product } from "./types";

describe("calculatePriceProduct", () => {
  test("should calculate the price based on quantity and price list", () => {
    //Mock data of type Product
    const product: Product = {
      name: "Milk",
      quantity: 4,
      unit: "liter",
    };

    expect(calculateProductPrice(product, prices)["price"]).toBe(10);
  });
});
