const { User } = require("../../schemas");
const { serverResponse } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password) || !user.verify) {
    serverResponse({
      res,
      data: { message: "Email or password is wrong or email is not verify" },
      status: 401,
      statMessage: "error",
    });
    return;
  }

  const token = user.createToken();

  await User.findByIdAndUpdate(user._id, { token });

  serverResponse({
    res,
    data: { token },
    status: 200,
    statMessage: "Login success",
  });
};

module.exports = login;
