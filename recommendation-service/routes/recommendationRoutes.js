const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/recommendationController');

router.get('/:userId', getRecommendations); // GET /api/recommendations/:userId

module.exports = router;
