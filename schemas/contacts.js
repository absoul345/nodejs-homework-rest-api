const Joi = require("joi");

const joiContactsSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "uk"] },
    })
    .min(1)
    .required(),
  phone: Joi.string().min(1).required(),
});

module.exports = joiContactsSchema;
