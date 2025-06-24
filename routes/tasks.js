const express = require('express');
const { createTask, getTasks } = require('../controllers/taskController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createTask);
router.get('/', auth, getTasks);

module.exports = router;
