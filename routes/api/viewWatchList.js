const express = require('express');
const router = express.Router();
const watchCtrl = require('../../controllers/viewWatchList');

router.post('/', watchCtrl.create);
router.delete('/', watchCtrl.deleteWatch);

module.exports = router;