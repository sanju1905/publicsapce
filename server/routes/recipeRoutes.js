// recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeControllers');
router.get('/', recipeController.homepage);
router.get('/share',recipeController.share);
router.get('/thoughts',recipeController.thoughts);
router.get('/videos',recipeController.videos);
router.get('/photos',recipeController.photos);
router.get('/audio',recipeController.audio);
router.post('/share',recipeController.shareSubmit);

module.exports = router;
