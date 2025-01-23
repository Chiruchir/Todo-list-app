const Todo = require('../models/Todo');
const asyncHandler = require('express-async-handler');

// @desc    Create new todo
// @route   POST /api/todos
// @access  Private
const createTodo = asyncHandler(async (req, res) => {
  const { title, description, priority, dueDate } = req.body;

  const todo = await Todo.create({
    title,
    description,
    priority,
    dueDate,
    user: req.user._id
  });

  res.status(201).json(todo);
});

// @desc    Get all todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user._id });
  res.json(todos);
});

// @desc    Update todo
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }

  // Ensure user owns todo
  if (todo.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    { new: true }
  );

  res.json(updatedTodo);
});

// @desc    Delete todo
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }

  // Ensure user owns todo
  if (todo.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await todo.remove();
  res.json({ message: 'Todo removed' });
});

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
};