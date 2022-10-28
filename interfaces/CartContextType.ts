import {Dispatch, SetStateAction} from "react";

import CartItem from "./CartItem";
import Product from "./Product";
import ProductState from "./ProductState";
import User from "./User";

export interface CartContextType {
  HandleRefresh: () => void;
  slider: boolean;
  setSlider: Dispatch<SetStateAction<boolean>>;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  isOpenCart: boolean;
  onOpenCart: () => void;
  onCloseCart: () => void;
  isOpenMenu: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  isOpenForm: boolean;
  onOpenForm: () => void;
  onCloseForm: () => void;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;

  selectedProduct: Product;
  setSelectedProduct: Dispatch<SetStateAction<Product>>;

  stateProducts: ProductState;

  setproductsState: Dispatch<SetStateAction<ProductState>>;
}
