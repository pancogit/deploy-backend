import { Router, Request, Response } from "express";
import { addTodoToDatabase, getAllTodos } from "../model/todoModel";

export const router = Router();

// get all todos from database
router.get("/todo", async (req: Request, res: Response) => {
    const allTodos = await getAllTodos();

    res.json({ allTodos });
});

// add todo item to the database
router.post("/add-todo", (req: Request, res: Response) => {
    const todo = req.body.todo;

    addTodoToDatabase(todo);

    res.json({ todoAdded: todo });
});
