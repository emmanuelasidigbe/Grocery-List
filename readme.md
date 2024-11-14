# Grocery List

This project is a simple Node.js application that reads a grocery list from a JSON file, calculates the prices of the products based on their quantity and a predefined price list, and generates a receipt in the form of a text file.

## Features

- Reads product data from a `grocery_list.json` file.
- Calculates the price of each product based on predefined prices.
- Generates a receipt with product details and total cost.
- Writes the receipt to a `shopping_receipt.txt` file.

## Technologies Used

- **TypeScript**: The code is written in TypeScript for type safety.
- **Node.js**: Used for reading files and performing calculations.
- **fs (File System)**: Used for reading and writing files.
- **ts-node-dev**: A tool to run TypeScript code directly, with live reload during development.

## Getting Started

### Prerequisites

To get started with this project, ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/grocery-list-receipt.git
   cd grocery-list-receipt
   ```

2. Install all the require packages
   `````bash
   npm i
      ````
   `````
3. Run the project
   ```bash
      npm run dev
   ```
