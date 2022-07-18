const express = require('express');
const mockrepo = require('../controllers/mockrepo');
const organizationController = require('../controllers/organizationController');
const tribeController = require('../controllers/tribeController');
const repoController = require('../controllers/repoController');
const metricsController = require('../controllers/metricsController');

const router = express.Router()

router.route('/getRepos').get(mockrepo.getRepos);
router.route('/getRepos/:id').get(mockrepo.getRepo);

router.route('/createOrganization').post(organizationController.createOrganization);
router.route('/updateOrganization/:id').patch(organizationController.updateOrganization);
router.route('/getOrganizations/').get(organizationController.getOrganizations);
router.route('/getOrganization/:id').get(organizationController.getOrganization);
router.route('/deleteOrganization/:id').delete(organizationController.deleteOrganization);

router.route('/getTribes').get(tribeController.getTribes);
router.route('/createTribe').post(tribeController.createTribe);

router.route('/getRepository').get(repoController.getRepository);
router.route('/createRepository').post(repoController.createRepository);

router.route('/getMetrics').get(metricsController.getMetrics);
router.route('/getMetric/:id').get(metricsController.getMetric);
router.route('/setMetrics').post(metricsController.setMetrics);
router.route('/getCSV/:id').get(metricsController.getCSV);

module.exports = router;
