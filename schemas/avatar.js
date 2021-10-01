const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Avatar = model("avatar", productSchema);

module.exports = {
  Avatar,
};
