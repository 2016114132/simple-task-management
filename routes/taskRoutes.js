import express from "express"

const router = express.Router();

let tasks = [
    {
        id: 1,
        title: "Task 1",
        description: "This is a test task 1",
        completed: false
    },
    {
        id: 2,
        title: "Task 2",
        description: "This is a test task 2",
        completed: true
    },
    {
        id: 3,
        title: "Task 3",
        description: "This is a test task 3",
        completed: false
    }
];
let tasksCounter = 0;

router.get("/", (req, res) => {
    res.render("tasks", {
        title: "Welcome!",
        tasks: tasks
    });
});


export default router