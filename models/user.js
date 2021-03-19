"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			name: DataTypes.STRING,
		},
		{}
	);
	User.associate = function (models) {
		// associations can be defined here
		User.hasMany(models.Todo, { foreignKey: "userId" });
		User.hasMany(models.List, { foreignKey: "authorId" });
	};
	return User;
};
