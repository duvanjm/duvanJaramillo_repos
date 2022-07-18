const Repository = require('../models/repoModel');

exports.createRepository = async (req, res) => {
  try {
    const newRepo = await Repository.create(req.body);
  
    res.status(201).json({ status: 'Succes', data: { newRepo } });
  } catch (err) {
    return res.status(400).json({ status: 'Fail', message: err.message });
  }
}

exports.getRepository = async (req, res) => {
  try {
    const repos = await Repository.find().select('-__v');

    res.status(200).json({ status: 'Succes', data: { repos } });
  } catch (err) {
    return res.status(404).json({ status: 'Fail', message: 'Not found' });
  }
}
