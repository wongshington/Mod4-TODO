"use strict";
module.exports = (sequelize, DataTypes) => {
	const Todo = sequelize.define(
		"Todo",
		{
			title: DataTypes.STRING,
			date: DataTypes.DATE,
			listId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
			completed: DataTypes.BOOLEAN,
		},
		{}
	);
	Todo.associate = function (models) {
		// associations can be defined here
		Todo.belongsTo(models.List, { foreignKey: "listId" });
		Todo.belongsTo(models.User, { foreignKey: "userId" });
	};
	return Todo;
};
