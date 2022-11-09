import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log("entro a la api");
  const body = req.body;
  console.log("body:", body);
  console.log("local_url:", process.env.LOCAL_URL);
  try {
   res
     .status(200)
     .json({
       body,
       host: process.env.HOST,
       url: process.env.LOCAL_URL,
       gmailpass: process.env.GMAIL_PASS,
       gmailuser: process.env.GMAIL_USER,
       accesstoken: process.env.ACCESS_TOKEN,
       acceskeyid: process.env.ACCES_KEY_ID,
       secretaccesskey: process.env.SECRET_ACCESS_KEY
     });
  } catch (error) {
    console.log("error api: ", error);
    res.status(500).json({ error: error });
  }
}
