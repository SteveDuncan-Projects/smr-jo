let express = require('express');
let router = express.Router();

// import controllers
let ctrlMain = require('../controllers/mainController');

/* GET home page. */
router.get('/', ctrlMain.main)
router.get('/about/history', ctrlMain.history);
router.get('/about/lineage', ctrlMain.lineage);
router.get('/about/teachers', ctrlMain.teachers);
router.get('/heiden', ctrlMain.heiden);
router.get('/locations', ctrlMain.map);


module.exports = router;
