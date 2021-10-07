const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const EMAIL_FROM = "bochkovskyi.vladyslav@gmail.com";
  try {
    const email = { ...data, from: EMAIL_FROM };
    const result = await sgMail.send(email);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
