"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todoModel_1 = require("../model/todoModel");
exports.router = (0, express_1.Router)();
// get all todos from database
exports.router.get("/todo", async (req, res) => {
    const allTodos = await (0, todoModel_1.getAllTodos)();
    res.json({ allTodos });
});
// add todo item to the database
exports.router.post("/add-todo", (req, res) => {
    const todo = req.body.todo;
    (0, todoModel_1.addTodoToDatabase)(todo);
    res.json({ todoAdded: todo });
});
//# sourceMappingURL=routes.js.map