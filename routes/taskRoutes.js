const express = require('express');
const { createTask, getTasks, updateTask } = require('../controllers/taskController'); // getTask ko getTasks kiya
const { protect, authorize } = require('../middleware/authMiddleware'); // Agar folder ka naam middlewares hai toh s lagana

// Sahi tareeka Express Router initialize karne ka
const router = express.Router(); 

router.use(protect);

router.post('/', authorize('Admin', 'Manager'), createTask);
router.get('/', authorize('Admin', 'Manager', 'Employee'), getTasks); // getTask ko getTasks kiya
router.put('/:id', authorize('Admin', 'Manager', 'Employee'), updateTask);

module.exports = router;