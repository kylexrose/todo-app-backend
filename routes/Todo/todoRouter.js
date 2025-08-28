const { getAllTodos, createNewTodo, updateTodoById, deleteTodoById } = require('./Controller/todoController')

const router = require('express').Router()

router.get('/get-all-todos', getAllTodos)
router.post('/create-todo', createNewTodo)
router.put('/update-todo/:id', updateTodoById)
router.delete('/delete-todo/:id', deleteTodoById)

module.exports = router