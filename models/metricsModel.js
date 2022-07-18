const mongoose = require('mongoose');
const Repository = require('./repoModel');

const metricSchema = mongoose.Schema({
  repository: Array,
  coverage: {
    type: Number,
    required: [true, 'Provide coverage'],
  },
  bugs: {
    type: Number,
    required: [true, 'Provide bugs'],
  },
  vulnerabilities: {
    type: Number,
    required: [true, 'Provide vulnerabilities'],
  },
  hospot: {
    type: Number,
    required: [true, 'Provide hospot'],
  },
  code_smell: {
    type: Number,
    required: [true, 'Provide code smell'],
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
);

metricSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'repository',
    select: 'name'
  })
  next();
})

metricSchema.pre('save', async function(next) {
  const repoPromises = this.repository.map(async (id) => await Repository.findById(id));
  this.repository = await Promise.all(repoPromises);
  next();
})

const Metrics = mongoose.model('Metrics', metricSchema);

module.exports = Metrics;
