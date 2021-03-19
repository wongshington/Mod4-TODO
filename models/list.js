"use strict";
module.exports = (sequelize, DataTypes) => {
	const List = sequelize.define(
		"List",
		{
			title: DataTypes.STRING,
			authorId: DataTypes.DATE,
		},
		{}
	);
	List.associate = function (models) {
		// associations can be defined here
		List.belongsTo(models.User, { foreignKey: "authorId" });
		List.hasMany(models.Todo, { foreignKey: "listId", onDelete: "CASCADE" });
	};
	return List;
};
