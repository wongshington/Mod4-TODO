// create the server
const express = require("express");
const app = express();

const todoRoutes = require("./routes/todo");

// const userRoutes = require("./routes/user");
// const listRoutes = require("./routes/list");

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const { Todo, List, User } = require("./models");
// include the models we're working with so we can access different db information
// app.use((req, res, next) => recordWhoIsLooking(req));
app.use("/todos", todoRoutes);
// app.use("/users", userRoutes);
// app.use("/lists", listRoutes);

// listen on a port
const port = 8080;
app.listen(port, () =>
	console.log(`we are listening to the smooooth jams on port: ${port}`)
);
