"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Lists", [
			{
				title: "List 1",
				authorId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "List 2",
				authorId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "List 3",
				authorId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "List 4",
				authorId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "List 5",
				authorId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Lists", {
			id: { [Sequelize.Op.gt]: 0 },
		});
	},
};
