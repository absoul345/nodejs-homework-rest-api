const { User } = require("../../schemas");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(204).json({ status: 204, message: "No Content" });
};

module.exports = logout;