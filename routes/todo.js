const express = require("express");

const router = express.Router();
const { Todo, List } = require("../models");

const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });

router.get("/", async (req, res) => {
	// recordWhoIsLooking() // makes some request to another server that is persisting visitor data
	const todos = await Todo.findAll();
	res.render("todos", { headText: "Todo or not To Do", todos });
});

router.get("/new", csrfProtection, async (req, res) => {
	const lists = await List.findAll();

	res.render("todo-form", { lists, csrfToken: req.csrfToken() });
});

router.post("/", csrfProtection, async (req, res) => {
	console.log("request bod-E", req.body);

	const { title, listId } = req.body;
	const todo = await Todo.create({ title, userId: 1, listId: 1 });
	console.log("---->", todo);

	res.redirect("/todos");
});

module.exports = router;
