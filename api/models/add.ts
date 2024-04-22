const { Schema, model } = require('mongoose');
const Joi = require('joi');

const addSchema = new Schema(
  {
    name: { type: String, required: true },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true },
);

const addJoiSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  price: Joi.number()
    .min(0)
    .required(),
  description: Joi.string()
    .min(3)
    .max(300)
    .required(),
  address: Joi.string().required(),
  lat: Joi.number().required(),
  lon: Joi.number().required(),
});

const Add = model('add', addSchema);

module.exports = { Add, addJoiSchema };
