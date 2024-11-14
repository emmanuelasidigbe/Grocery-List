import { promises as fs } from "fs";
import path from "path";
import { prices } from "./prices";
import { Price, Product } from "./types";

// Define the file path for the grocery list JSON file using the __dirname to get the absolute path
const filePath = path.join(__dirname, "grocery_list.json");

// Function to read the grocery list from the JSON file
export async function readGroceryList(filePath: string): Promise<Product[]> {
  const data = await fs.readFile(filePath, "utf-8");
  // Parse the JSON data and return the list of products
  return JSON.parse(data).items;
}

// Function to calculate the price for each product based on its quantity and the price list
export function calculateProductPrice(
  product: Product,
  prices: Price
): Product {
  const itemPrice = prices[product.name] || 0;

  return { ...product, price: product.quantity * itemPrice };
}

// The main function to generate the grocery receipt
export async function generateReceipt() {
  try {
    //  Read the grocery list from the JSON file using the function created
    const products = await readGroceryList(filePath);

    //  Mapping over the products and calculating the price for each one
    const pricedProducts = products.map((product) =>
      calculateProductPrice(product, prices)
    );

    // Calculate the total price using reduce
    const totalPrice = pricedProducts.reduce(
      (total, product) => total + (product.price || 0),
      0
    );

    //Format each product into a readable string, that is an array of string of each item on the grocery list
    const display = pricedProducts.map(
      (product) =>
        `${product.name} - ${product.quantity} ${product.unit} - $${(
          product.price || 0
        ).toFixed(2)}`
    );

    //  A final receipt display with all product details and total price
    const finalDisplay = `Grocery List: 
--------------------
${display.join("\n")} 
--------------------
Total: $${totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
`;

    // Writing the final receipt to a text file
    await fs.writeFile("shopping_receipt.txt", finalDisplay, "utf8");

    console.log("Receipt successfully written to shopping_receipt.txt");
  } catch (error) {
    console.error("Error processing receipt:", error);
  }
}

// Check if the script is run directly (not imported as a module)
if (require.main === module) generateReceipt();
