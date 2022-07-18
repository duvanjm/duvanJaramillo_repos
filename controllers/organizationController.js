const Organization = require('../models/organizationModel');

exports.createOrganization = async (req, res) => {
  try {
    const newOrganization = await Organization.create(req.body);

    res.status(201).json({ status: 'Succes', data: { newOrganization } });

  } catch (err) {
    return res.status(400).json({ status: 'Fail', message: err.message });
  }
}

exports.updateOrganization = async (req, res) => {
  try{
    const org = await Organization.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ status: 'succes', data: { org }});

  } catch(err) {
    return res.status(404).json({ status: 'Fail', message: 'Organization not found'});
  }
} 

exports.getOrganizations = async (req, res) => {
  try {
    const orgs = await Organization.find().select('-__v');

    res.status(200).json({ status: 'Succes', data: { orgs } });
  } catch (err) {
    return res.status(404).json({ status: 'Fail', message: 'Not found' });
  }
}

exports.getOrganization = async (req, res) => {
  try {
    const org = await Organization.findById(req.params.id).select('-__v');

    res.status(200).json({status: 'Succes', data: { org }});
  } catch (err) {
    return res.status(404).json({ status: 'Fail', message: 'Not found' });
  }
}

exports.deleteOrganization = async (req, res) => {
  try {
    await Organization.findByIdAndDelete(req.params.id);

    res.status(204).json({ status: 'Succes', data: null });

  } catch (err) {
    return res.status(404).json({ status: 'Fail', message: 'Not found' });
  }
}
