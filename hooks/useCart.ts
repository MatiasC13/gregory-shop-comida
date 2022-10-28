import { useShoping } from "../context/context";
import CartItem from "../interfaces/CartItem";
import Product from "../interfaces/Product";
import { parseCurrency } from "../utils/helper";

const useCart = () => {
  const { cart, setCart } = useShoping();

  const  addItem =(product: Product) =>{
    const newItem: CartItem = {
      product,
      quantityUnits: 1,
    };

    if (cart.length == 0) {
      setCart([...cart, newItem]);
    } else {
      updateCart(product, 1);
    }
  }

  const updateCart = (product: Product, q: number) => {
    const found = cart.findIndex((f) => f.product.id === product.id);
    const newItem: CartItem = {
      product,
      quantityUnits: 1,
    };
    if (found == -1) {
      setCart((prev) => {

        const newList = [newItem,...prev];
        return newList;
      });
    } else {
      newItem.quantityUnits = { ...cart[found] }.quantityUnits + q;
      setCart((prev) => {
        prev[found] = newItem;
        const newList = [...prev];
        return newList;
      });
    }
  };

  const removeItem = (deleteId: number) => {


    setCart((prev) => prev.filter(({ product }) => product.id !== deleteId));

  };

  const clearCart = () =>
    setCart([]);



  const getNumberOfItems = () => {
    const total = cart.reduce((acc, item) => {
      return (acc += item.quantityUnits);
    }, 0);

    return total;
  };

  const subTotal = (idSearched: number): number => {
    const item = cart.find((item) => item.product.id === idSearched);
    const subTotal = item.product.price * item.quantityUnits;

    return subTotal;
  };
  const totalCost = cart.reduce(
    (sum, item) => sum + subTotal(item.product.id),
    0
  );

  const textMessage = () => {
    let msg = "";

    cart.forEach((item) => {
      msg += `${item.product.title} -Precio Unitario:  ${parseCurrency(
        item.product.price
      )} -unidades: ${item.quantityUnits} subtotal: ${parseCurrency(
        subTotal(item.product.id)
      )}\n`;
    });
    msg += `Monto a pagar: ${parseCurrency(totalCost)}`;

    return msg;
  };

  return {
    getNumberOfItems,
    textMessage,
    totalCost,
    cart,
    setCart,
    addItem,
    clearCart,
    removeItem,
    updateCart,
    subTotal,
  };
};

export default useCart;
