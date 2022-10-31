import Product from "interfaces/Product";
import { urlBase } from "utils/helper";
import {ownerEmail} from "utils/ownerData"

const getProducts = async (): Promise<Product[]> => {


  try {
    const response = await fetch(
      urlBase + ownerEmail 
    );
    const data = await response.json();


    // console.log(data);
    return data.data

  } catch (error) {
    alert(error.error_description || error.message);
  }
};

export default getProducts;
