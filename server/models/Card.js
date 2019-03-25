const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  date: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  location: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  summary: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  food: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  taste: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  _id: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  picture: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  temperatur: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
  weather: {
    type: mongoose.SchemaTypes.String,
    default: '',
  },
})

module.exports = mongoose.model('Card', CardSchema)
