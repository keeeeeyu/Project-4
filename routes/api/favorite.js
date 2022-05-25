const express = require('express');
const router = express.Router();
const favoriteCtrl = require('../../controllers/favorite')

router.post('/', favoriteCtrl.create)
// router.delete('/', favoriteCtrl.deleteFavorite)

module.exports = router;