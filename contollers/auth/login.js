const { User } = require("../../schemas");
const { successRequest } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    successRequest({
      res,
      data: { message: "Email or password is wrong" },
      status: 401,
      statMessage: "error",
    });
    return;
  }

  const token = user.createToken();

  await User.findByIdAndUpdate(user._id, { token });

  successRequest({
    res,
    data: { token },
    status: 200,
    statMessage: "Login success",
  });
};

module.exports = login;
