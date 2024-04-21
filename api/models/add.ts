const { Schema, model } = require('mongoose');

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

const Add = model('add', addSchema);

module.exports = Add;
