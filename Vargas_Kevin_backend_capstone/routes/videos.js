const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');

router.post('/', videosController.createVideo);
router.get('/', videosController.getAllVideos);
router.get('/:id', videosController.getVideoById);
router.put('/:id', videosController.updateVideo);
router.delete('/:id', videosController.deleteVideo);

module.exports = router;
