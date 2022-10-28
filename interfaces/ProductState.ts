import Product from "./Product";

export default interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  boostProducts: Product[];
}
