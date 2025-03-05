import express from "express"

const router = express.Router();

let tasks = [];
let tasksCounter = 1;

router.get("/", (req, res) => {
    res.render("tasks", {
        title: "Welcome!",
        tasks: tasks
    });
});

router.post("/add-task", (req, res) => {
    var { title, description } = req.body;

    if(!title || !description){
        res.status(400).send('Invalid title or description!');
    }

    tasks.push(
        {
            id: tasksCounter,
            title: title,
            description: description,
            completed: false
        }
    );

    tasksCounter++;

    res.redirect('/');
});

export default router