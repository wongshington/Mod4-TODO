// create the server
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const todoRouter = require("./routes/todo");

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static("public"));

const { Todo, List, User } = require("./models");

app.get("/", async () => {
	const lists = await List.findAll();
	console.log("lists", lists);
	res.render("lists", { lists, headerText: "All the todo Lists!" });
});

app.use("/todos", todoRouter);

// listen on a port
const port = 8080;
app.listen(port, () =>
	console.log(`we are listening to the smooooth jams on port: ${port}`)
);
