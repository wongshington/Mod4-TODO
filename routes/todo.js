const express = require("express");
const router = express.Router();
const { Todo } = require("../models");

router.get("/", async (req, res) => {
	// recordWhoIsLooking() // makes some request to another server that is persisting visitor data
	const todos = await Todo.findAll();
	res.render("todos", { headText: "Todo or not To Do", todos });
});

router.get("/new", async (req, res) => {
	// const todos = await Todo.findAll();
	res.render("todo-form", { headText: "New ToDo?" });
});

router.post("/", async (req, res) => {
	console.log("request bod-E", req.body);

	const { title } = req.body;
	const post = await Todo.create({ title, userId: 1, listId: 1 });

	// res.send('testing post route')
	res.redirect("/todos");
});

module.exports = router;
