const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    max: 50,
    required: [true, 'Organization must have a name'],
  },
  status: {
    type: Number,
    required: [true, 'Organization must have a status'],
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
