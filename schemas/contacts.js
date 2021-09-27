const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { BadRequest } = require("http-errors");

const codeRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
      unique: true,
    },
    phone: {
      type: String,
      match: [codeRegExp, "mobile phone can only be 9 digits"],
      required: [true, "Set phone for contact"],
      unique: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    throw new BadRequest("This email or phone already exist");
  } else {
    next();
  }
});

const joiContactsSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "uk"] },
    })
    .min(1)
    .required(),
  phone: Joi.string().min(5).pattern(codeRegExp).required(),
  favorite: Joi.boolean(),
});

const Contact = model("contact", contactSchema);

module.exports = { Contact, joiContactsSchema };
