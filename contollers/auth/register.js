const { User } = require("../../schemas");
const { successRequest } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    successRequest({
      res,
      status: 409,
      statMessage: "error",
      data: { message: "Already register" },
    });
    return;
  }

  const newUser = new User({ email });
  newUser.setPassword(password);

  await newUser.save();

  successRequest({
    res,
    status: 201,
    data: {
      message: "Success register",
    },
  });
};

module.exports = register;
