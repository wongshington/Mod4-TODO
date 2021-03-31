const express = require("express");

const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const router = express.Router();
const { User } = require("../models");

const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });

const loginUser = (req, res, user) => {
	req.session.auth = {
		userId: user.id,
	};
	debugger;
	console.log(req.session);
};

const logoutUser = (req, res) => {
	delete req.session.auth;
};

const asyncHandler = (handler) => (req, res, next) =>
	handler(req, res, next).catch(next);

const signupValidators = [
	check("name")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Name")
		.isLength({ max: 100 })
		.withMessage("Name must not be more than 100 characters long")
		.custom((value) => {
			return db.User.findOne({ where: { name: value } }).then((user) => {
				if (user) {
					return Promise.reject(
						"The provided Name is already in use by another account"
					);
				}
			});
		}),
	check("password")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Password")
		.isLength({ max: 30 })
		.withMessage("Password must not be more than 30 characters long"),
];

const loginValidators = [
	check("name")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Name"),
	check("password")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Password"),
];

// signup routes
router.get("/signup", csrfProtection, async (req, res) => {
	res.render("signup", {
		headText: "User Sign Up",

		csrfToken: req.csrfToken(),
	});
});

router.post(
	"/signup",
	csrfProtection,
	signupValidators,
	asyncHandler(async (req, res) => {
		const { name, password } = req.body;
		const user = User.build({ name });
		debugger;
		const hashedPassword = await bcrypt.hash(password, 10);
		user.pwDigest = hashedPassword;

		await user.save();

		loginUser(req, res, user);
		console.log(user);
		res.redirect("/");

		// we could implement some error handling here
	})
);

// login routes
router.get("/login", csrfProtection, async (req, res) => {
	const user = User.build();
	res.render("login", {
		headText: "Login Here!",
		user,
		csrfToken: req.csrfToken(),
	});
});

router.post(
	"/login",
	csrfProtection,
	loginValidators,
	asyncHandler(async (req, res) => {
		//
		const { name, password } = req.body;
		const user = await User.findOne({ where: { name } });

		if (user !== null) {
			// If the user exists then compare their password
			// to the provided password.
			const passwordMatch = await bcrypt.compare(
				password,
				user.pwDigest.toString()
			);

			if (passwordMatch) {
				// If the password hashes match, then login the user
				// and redirect them to the default route.
				loginUser(req, res, user);
				return res.redirect("/");
			}
		}
	})
);

module.exports = router;
