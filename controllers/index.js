const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes= require('controllers/homepageRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;




