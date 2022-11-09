import {
  emailNotifications,
  footer,
  msgPrincipal,
  ownerEmail,
  textDisplayBtn,
} from "utils/ownerData";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import emailTempate from "utils/emailTemplate";
import AWS from "aws-sdk";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.body.data?.id) {
    const order = req.body.data.id;

    try {
      const data = await obtenerDatos(order);

      await sendMail(data, order, res);
      // res.status(200).json({ id: order });
    } catch (e) {
      console.log("ocurrio error webghook: ", e);
      res.status(500).json(e);
    }
  } else {
    res.status(400).json({ msg: "null id notification" });
  }
}

async function obtenerDatos(id: any) {
  const url = `https://api.mercadopago.com/v1/payments/${id}?access_token=${process.env.ACCESS_TOKEN}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const {
    transaction_amount,
    external_reference: user,
    additional_info,
    status,
  } = data;

  const { items } = additional_info;

  return [JSON.parse(user), items, transaction_amount, status];
}

async function sendMail(data, order, res) {
  const [user, items, transaction_amount, status] = data;

  const mailData = {
    from: {
      name: `${process.env.BUSINESS_NAME}`,
      // address: ownerEmail,
      address: "contacto@tiendasgregory.com",
    },
    // replyTo: ownerEmail,
    replyTo: "contacto@tiendasgregory.com",
    to: user.email,
    // bcc: ownerEmail,
    subject: `Número de compra: ${order} `,

    html: emailTempate(
      items,
      order,
      user,
      transaction_amount,
      msgPrincipal(status),
      footer,
      textDisplayBtn,
      process.env.LOCAL_URL
    ),
  };

// AWS.config.update({
//   accessKeyId: process.env.ACCES_KEY_ID,
//   secretAccessKey: process.env.SECRET_ACCESS_KEY,
//   region: "sa-east-1",
// });

// const transporter = nodemailer.createTransport({
// SES: new AWS.SES({
//   apiVersion: '2010-12-01'
// })
// });

  const transporter = nodemailer.createTransport({
    // host: process.env.HOST,
    host: "smtp.ionos.com",
    port: 25,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: "contacto@tiendasgregory.com",
      pass: "Pruebita123",
      // user: process.env.GMAIL_USER,
      // pass: process.env.GMAIL_PASS,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);

        // res.status(500).json({ status: "bad", data, ownerEmail });
        res.status(500).json({ status: "bad", data });
      } else {
        console.log(info);

        res.status(200).json({ status: "good", data });
        // res.status(200).json({ status: "good", data, ownerEmail });
      }
    });
  });

  // res.status(200).json({ status: "OK" });
}
