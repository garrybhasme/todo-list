const express=require("express");
const { getAllTasks, createNewtask, toggleTask, updateTask, deleteTask } = require("../controllers/todoController");
const router=express.Router();

/**
 * Route: /
 * Method: GET
 * Decsription:  Get all the list of tasks in the system
 * Access: Public
 * Paramters: None
 */
router.get('/', getAllTasks);

/**
 * Route: /
 * Method: POST
 * Decsription:  Create a new task
 * Access: Public
 * Paramters: None
 */ 
router.post('/', createNewtask);

/**
 * Route: /:id
 * Method: PATCH
 * Decsription:  Toggle isCompleted by id
 * Access: Public
 * Paramters: id
 */
router.patch('/:id', toggleTask);

/**
 * Route: /:id
 * Method: PUT
 * Decsription:  Update a task by its ID
 * Access: Public
 * Paramters: id
 */
router.put('/:id', updateTask);

/**
 * Route: /:id
 * Method: DELETE
 * Decsription:  Delete a task by its ID
 * Access: Public
 * Paramters: id
 */
router.delete('/:id', deleteTask);

module.exports = router;