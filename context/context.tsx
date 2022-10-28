import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";

import { useDisclosure } from "@chakra-ui/react";
import { CartContextType } from "../interfaces/CartContextType";
import CartItem from "../interfaces/CartItem";
import Product from "../interfaces/Product";
import ProductState from "../interfaces/ProductState";
import User from "interfaces/User";


const shoppingContext = createContext({});

interface Props {
  children: ReactNode;
}
export const ShoppingProvider = ({ children }: Props): JSX.Element => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [slider, setSlider] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product>(null);
  const [user, setUser ] = useState<User>({} as User)

  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();
  const {
    isOpen: isOpenForm,
    onOpen: onOpenForm,
    onClose: onCloseForm,
  } = useDisclosure();

  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useDisclosure();

  // const [loading, setLoading] = useState(true);
  const [stateProducts, setproductsState] = useState<ProductState>({
    filteredProducts: [],
    products: [],
    boostProducts: [],
  });
  const HandleRefresh = () => {
    setproductsState((prev) => ({ ...prev, filteredProducts: prev.products }));
  };

  const storeCart = {
    stateProducts,
    setproductsState,
    isOpenCart,
    onOpenCart,
    HandleRefresh,
    slider,
    setSlider,
    isOpenForm,
    onOpenForm,
    onCloseForm,
    isOpenMenu,
    onOpenMenu,
    onCloseMenu,user,setUser,
search, setSearch,
    onCloseCart,
    cart,
    setCart,
    selectedProduct,
    setSelectedProduct,
  };
  //cartItem
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("items"));
    if (cartData) {
      setCart(cartData);
    }
  }, []);
  useEffect(() => {
    if (cart) {
      localStorage.setItem("items", JSON.stringify(cart));
    }
  }, [cart]);

  // weather the user state has something differente to empty object then localStorage take its value
  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);
//the first render the userstate take the value of the local storage weather the local storage has a value else  it will keep the default value
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <shoppingContext.Provider value={storeCart}>
      {children}
    </shoppingContext.Provider>
  );
};

export const useShoping = () => useContext(shoppingContext) as CartContextType;
