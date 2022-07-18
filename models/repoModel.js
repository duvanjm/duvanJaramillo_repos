const mongoose = require('mongoose');
const Tribe = require('./tribeModel');

const repoSchema = new mongoose.Schema({
  tribe: Array,
  name: {
    type: String,
    max: 50,
    required: [true, 'Repository must have a name'],
  },
  state: {
    type: String,
    max: 1,
    required: [true, 'Please provide a state'],
    enum: ['E', 'D', 'A'],
  },
  create_time: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    max: 1,
    required: [true, 'Please provide a state'],
    enum: ['A', 'I'],
  }
},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

repoSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'tribe',
    select: 'name'
  })
  next();
})

repoSchema.pre('save', async function(next) {
  const repoPromises = this.tribe.map(async (id) => await Tribe.findById(id));
  this.tribe = await Promise.all(repoPromises);
  next();
})

const Repository = mongoose.model('Repository', repoSchema);

module.exports = Repository;
