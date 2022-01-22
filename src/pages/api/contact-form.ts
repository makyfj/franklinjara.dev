import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { GMAIL_USER, GMAIL_PASS } from "@/constants/api";

interface Data {
  email: string;
  description: string;
}

interface MailOption {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export default function contactForm(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, description } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });

  const mailOption: MailOption = {
    from: `${email}`,
    to: `${process.env.GMAIL_USER}`,
    subject: `New email from ${email}`,
    text: `
    ${email} wrote:
    ${description}
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Mail send ${data}`);
    }
  });

  res.json({ email, description });
}
