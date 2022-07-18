const Tribe = require('../models/tribeModel');

exports.createTribe = async (req, res) => {
  try {
    const newTribe = await Tribe.create(req.body);

    res.status(201).json({ status: 'Success', data: { newTribe } });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: 'Fail', message: err.message });
  }
}

exports.getTribes = async (req, res) => {
  try {
    const tribes = await Tribe.find().select('-__v');

    res.status(200).json({ status: 'Success', data: { tribes } });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'Fail', message: 'Not found' });
  }
}
