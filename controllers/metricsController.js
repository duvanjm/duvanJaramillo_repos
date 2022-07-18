const Metrics = require('../models/metricsModel');
const mongoose = require('mongoose');
const filterResponse = require('../utils/filterResponse');
const { createCSV } = require('../utils/createCSV');

exports.getMetrics = async (req, res) => {
  try {
    const metrics = await Metrics.find();

    res.status(200).json({ status: 'Success', data: { metrics } });
  } catch (err) {
    return res.status(404).json({ status: 'Fail', message: 'Not Found' });
  }
}

exports.setMetrics = async (req, res) => {
  try {
    const metrics = await Metrics.create(req.body);

    res.status(201).json({ status: 'Success', data: { metrics } });
  } catch (err) {
    return res.status(400).json({ status: 'Fail', message: err.message });
  }
}

exports.getMetric = async (req, res) => {
  try {
    const tribeId = req.params.id;
    const response = await Metrics.find({'repository.tribe._id': mongoose.Types.ObjectId(tribeId)}).select('-_id');

    if (response.length < 1) throw Error('Not id found')

    const repositories = filterResponse(response);

    if (repositories.coverage * 1 < 75) {
      return res.status(404).json({ status: 'Fail', message:  'La Tribu no tiene repositorios que cumplan con la cobertura necesaria' })
    }
    
    res.status(200).json({  repositories  });
  } catch (err) {
    return res.status(404).json({ status: 'Fail', message: 'La Tribu no se encuentra registrada' });
  }
}

exports.getCSV = async (req, res) => {
  try {
    const tribeId = req.params.id;
    const response = await Metrics.find({'repository.tribe._id': mongoose.Types.ObjectId(tribeId)}).select('-_id');

    if (response.length < 1) throw Error('Not id found')

    const repositories = filterResponse(response);

    const data = await createCSV(repositories);

    await res.attachment('../file.csv');
    res.status(200).send(data);
  } catch (err) {
    return res.status(404).json({ status: 'Fail', message: 'La Tribu no se encuentra registrada' });
  }
}
