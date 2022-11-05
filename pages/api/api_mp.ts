import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { curency, urlPreferences } from "utils/helper";
import CartItem from "interfaces/CartItem";
import User from "interfaces/User";
import MercadoPagoItems from "interfaces/MercadoPagoItems";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const body = setBodyRequestPreferences(req.body);

  try {
    const payment = await createPayment(urlPreferences, body);
    res.status(200).json(payment);
  } catch (error) {
    console.log("error api: ", error);
    res.status(500).json({ error: error });
  }
}

async function createPayment(
  url: string,
  body: {
    payer: { name: string; surname: string; email: string };
    items: MercadoPagoItems[];
    back_urls: {
      // failure: `/Pending`,
      failure: string;
      // pending: `/Pending`,
      pending: string;
      // success: `/Success`,
      success: string;
      auto_return: string;
    };
    external_reference: User;
    notification_url?: string;
  }
) {
  const payment = await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  return payment.data;
}
const setBodyRequestPreferences = (data: { cart: CartItem[]; user: User }) => {
  const { cart, user } = data;
  const { name, email, surname } = user;

  const items: MercadoPagoItems[] = cart.map((item: CartItem) => ({
    title: item.product.title,
    unit_price: item.product.price,
    quantity: item.quantityUnits,
    description: item.product.description,
    currency_id: curency,
    picture_url: item.product.image[0],
    category_id: item.product.category,
  }));

  const body = {
    payer: {
      name,
      surname,
      email,
      // phone: {
      //   area_code: "11",
      //   number: "4444-4444",
      // },
      // identification: {
      //   type: "DNI",
      //   number: "12345678",
      // },
      // address: {
      //   street_name: "Street",
      //   street_number: 123,
      //   zip_code: "5700",
      // },
    },
    items,
    back_urls: {
      // failure: `/Pending`,
      failure: `${process.env.LOCAL_URL}Pending`,
      // pending: `/Pending`,
      pending: `${process.env.LOCAL_URL}Pending`,
      // success: `/Success`,

      success: `${process.env.LOCAL_URL}Success`,
      auto_return: "all",
    },
    external_reference: user,
    notification_url: `${process.env.LOCAL_URL}api/notifications`,
  };
  return body;
};
