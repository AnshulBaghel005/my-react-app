const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body ) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: 'Store',
      to:`${email}`,
      subject: `${title}`,
      text: "Hello world?", // plain‑text body
      html: `${body}`, // HTML body
    });

    console.log("Message sent:", info);
    return info;
  } catch (err) {
    console.log(err);
  }
};

module.exports=mailSender