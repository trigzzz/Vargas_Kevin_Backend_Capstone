const express = require('express');
const router = express.Router();
const communityPostsController = require('../controllers/communityPostsController');
const auth = require('../middleware/auth');

router.post('/', auth, communityPostsController.createPost);
router.get('/', communityPostsController.getAllPosts);
router.get('/:id', communityPostsController.getPostById);
router.put('/:id', communityPostsController.updatePost);
router.delete('/:id', communityPostsController.deletePost);

module.exports = router;
