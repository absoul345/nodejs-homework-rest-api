const { User } = require("../../schemas");
const { serverResponse, sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    serverResponse({
      res,
      status: 409,
      statMessage: "error",
      data: { message: "Already register" },
    });
    return;
  }

  const newUser = new User({ email });

  newUser.setPassword(password);
  newUser.setVerifyToken();

  const { verifyToken } = newUser;

  const data = {
    to: "absoul345@gmail.com",
    subject: "Thenk you for registration",
    text: "fsdfsdfsdfs",
    html: `<a href="http://localhost:3000/api/v1/users/verify/${verifyToken}" target="_blank">Confrim your's registration</a>`,
  };

  await sendEmail(data);

  await newUser.save();

  serverResponse({
    res,
    status: 201,
    data: {
      message: "Success registration",
      verifyToken,
    },
  });
};

module.exports = register;
