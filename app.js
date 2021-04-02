const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const secret = "123-secret";

// import separate router functions
const todoRouter = require("./routes/todo");
const userRouter = require("./routes/user");

const app = express();

// set pug templates as rendering engine
app.set("view engine", "pug");

// session config
app.use(cookieParser(secret));
app.use(
	session({
		name: "todo.sid",
		secret: secret,
		resave: false,
		saveUninitialized: false,
	})
);

app.use(express.urlencoded({ extended: true }));

// add css styling
app.use(express.static("public"));

// persist user info to session cookie
app.use(async (req, res, next) => {
	// Log the session object to the console
	console.log("in middleware:", req.session);

	if (req.session.auth) {
		const { userId } = req.session.auth;

		try {
			const user = await User.findByPk(userId);

			if (user) {
				res.locals.authenticated = true;
				res.locals.user = user;
				next();
			}
		} catch (err) {
			res.locals.authenticated = false;
			next(err);
		}
	} else {
		res.locals.authenticated = false;
		next();
	}
});

const { Todo, List, User } = require("./models");

const asyncHandler = (handler) => (req, res, next) =>
	handler(req, res, next).catch(next);

const requireAuth = (req, res, next) => {
	if (!res.locals.authenticated) {
		return res.redirect("/user/login");
	}
	// if loggedIn
	return next();
};

app.get(
	"/",
	requireAuth,
	asyncHandler(async (req, res) => {
		const lists = await List.findAll({ include: Todo });

		res.render("lists", { lists, headText: "All the todo Lists!" });
	})
);

app.use("/todos", todoRouter);
app.use("/user", userRouter);

// listen on a port
const port = 8080;
app.listen(port, () =>
	console.log(`we are listening to the smooooth jams on port: ${port}`)
);
