import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { emailNotifications } from "utils/ownerData";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  sendMail(req, res);
}

async function sendMail(req, res){
const error = await(req.body);

console.log("body", error);
const msg = error.message;
console.log("msg", msg);
// res.status(200).json({success: true})

const mailData = {
  from: {
    name: `Error Simple shop`,
    address: emailNotifications,
  },
  replyTo: emailNotifications,
  to: emailNotifications,
  subject: "Ocurrio un error",

  html: `<p> Error \n${msg}</p>`,
};
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: emailNotifications,
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

      res.status(500).json(reject(err));
    } else {
      console.log(info);

      res.status(200).json(resolve(info));
    }
  });
});  
}
