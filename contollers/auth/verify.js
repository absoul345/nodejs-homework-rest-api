const { User } = require("../../schemas");
const { BadRequest } = require("http-errors");
const { serverResponse } = require("../../helpers");

const verify = async (req, res) => {
  const { verifyToken } = req.params;
  const user = await User.findOne({ verifyToken });
  if (!user) {
    throw new BadRequest("Verification has already been passed");
  }
  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true });
  serverResponse({
    res,
    status: 200,
    data: {
      message: "Success verify email",
    },
  });
};

module.exports = verify;
