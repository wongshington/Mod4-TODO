"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Todos", [
			{
				title: "Todo1",
				date: new Date("April 1, 2021"),
				completed: true,
				userId: 1,
				listId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "Todo2",
				date: new Date("April 1, 2021"),
				completed: true,
				userId: 2,
				listId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "Todo3",
				date: new Date("April 1, 2021"),
				completed: true,
				userId: 3,
				listId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "Todo4",
				date: new Date("April 1, 2021"),
				completed: true,
				userId: 4,
				listId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Todos", {
			id: { [Sequelize.Op.gt]: 0 },
		});
	},
};
