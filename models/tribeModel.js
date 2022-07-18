const mongoose = require('mongoose');
const Organization = require('./organizationModel');

const tribeSchema = mongoose.Schema({
  organization: Array,
  name: {
    type: String,
    max: 50,
    required: [true, 'Tribe must have a name'],
  },
  status: {
    type: Number,
    required: [true, 'Tribe must have a status'],
  },
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

tribeSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'organization',
    select: 'name'
  })
  next();
});

tribeSchema.pre('save', async function(next) {
  const repoPromises = this.organization.map(async (id) => await Organization.findById(id));
  this.organization = await Promise.all(repoPromises);
  next();
})

const Tribe = mongoose.model('Tribe', tribeSchema);

module.exports = Tribe;
