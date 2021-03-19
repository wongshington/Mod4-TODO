"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Users", [
			{
				name: "Tom",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Jerry",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", { id: { [Sequelize.Op.gt]: 0 } });
	},
};
