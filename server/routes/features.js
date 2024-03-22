
const router = require('express').Router();

const featuresController = require('../controller/feature');

router.post('/feature', featuresController.postfeatures);

router.get('/features', featuresController.getfeatures);

router.post('/features', featuresController.filterFeatures);

module.exports = router;


