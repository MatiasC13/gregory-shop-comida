import ImageFireBase from "./ImageFirebase";

export default interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string[];
  price: number;
  boost:boolean
}
