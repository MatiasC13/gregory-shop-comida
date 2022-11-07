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

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.body.data?.id) {
    let response: any[];

    const order = req.body.data.id;

    try {

      const data = await obtenerDatos(order);

      response = data
      const [user, items, transaction_amount, status] = data;
      const { email } = user;

      await sendMailSuccess(
        email,
        order,
        items,
        user,
        transaction_amount,
        status,
        res, data

      );
      // res.status(200).json({ id: order });
    } catch (e) {
      await sendMail(response, res, order);
      // const { email } = user;

      //     await sendMailSuccess(
      //       email,
      //       order,
      //       items,
      //       user,
      //       transaction_amount,
      //       status,
      //       res,
      //       response
      //     );
      // res.status(400).json({ msg: `estñas en el catch y hay id: ${order}`, response: response });
    }
    // } finally {
    //   await sendMail(emailNotifications, order, `finally ${order}`);
    //   res.end();
    // }
  } else {
    res.status(400).json({ msg: "null id notification" });
  }
}

async function obtenerDatos(id: any) {
  const url = `https://api.mercadopago.com/v1/payments/${id}?access_token=${process.env.ACCESS_TOKEN}`;
  // const url = `https://api.mercadopago.com/v1/payments/${id}?access_token=TEST-5700026799056399-072520-2151ddcd598f81c5c266e166878b6e68-1165635666`;
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

async function sendMailSuccess(
  email,
  order,
  items,
  user,
  transaction_amount,
  status,
  res, data

) {
  const mailData = {
    from: {
      name: `${process.env.BUSINESS_NAME}`,
      address: ownerEmail,
      // address: "matiascabralmendez@gmail.com",
    },
    replyTo: ownerEmail,
    to: email,
    // to: "fernandoleonett@gmail.com",
    bcc: ownerEmail,
    // bcc: "matiascabralmendez@gmail.com",
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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      // user:"gregory.notificaciones@gmail.com",
      // pass:"urgqvtkzovsiqivj",
      pass: process.env.GMAIL_PASS,
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

        res.status(500).json({status:"bad", data});
      } else {
        console.log(info);

        res.status(200).json({ status: "good", data });
      }
    });
  });

  // res.status(200).json({ status: "OK" });
}

async function sendMail(data, res, order) {
  const [user, items, transaction_amount, status] = data;
  const { email } = user;

  const mailData = {
    from: {
      name: `${process.env.BUSINESS_NAME}`,
      address: ownerEmail,
      // address: "matiascabralmendez@gmail.com",
    },
    replyTo: ownerEmail,
    to: email,
    // to: "fernandoleonett@gmail.com",
    bcc: ownerEmail,
    // bcc: "matiascabralmendez@gmail.com",
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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      // user:"gregory.notificaciones@gmail.com",
      // pass:"urgqvtkzovsiqivj",
      pass: process.env.GMAIL_PASS,
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

        res.status(500).json({ status: "bad", data });
      } else {
        console.log(info);

        res.status(200).json({ status: "good", data });
      }
    });
  });

  // res.status(200).json({ status: "OK" });
}
