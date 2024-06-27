import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

var mailOptions = {
  from: "",
  // Comma separated list or an array of recipients email addresses that will appear on the to
  to: "",
  // Comma separated list or an array of recipients email addresses that will appear on the Cc
  cc: "",
  // Comma separated list or an array of recipients email addresses that will appear on the Bcc
  bcc: "",
  // The subject of the email
  subject: "",
  // The plain text version os an Unicode String
  text: "",
  // The HTML version of the message as an Unicode string
  // html: "",
  // An array of attachment objects
  attachments: [
    // {
    //   filename: "image.png",
    //   content: imageAttachment,
    //   encoding: "base64",
    //   cid: "uniqueImageCID", // Referenced in the HTML template
    // },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

// https://nodemailer.com/message/
