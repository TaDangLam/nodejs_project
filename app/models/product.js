const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    // name: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
    // cost: {type: String, maxLength: 255},
    description: {type: String, maxLength: 600},
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
    buff: Buffer
  });

// model(modelName, MySchema)
exports.module = mongoose.model('product', Product);
