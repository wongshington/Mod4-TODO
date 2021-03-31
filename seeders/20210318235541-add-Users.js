"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Users", [
			{
				name: "Tom",
				createdAt: new Date(),
				updatedAt: new Date(),
				pwDigest: "123456qwerty",
			},
			{
				name: "Jerry",
				createdAt: new Date(),
				updatedAt: new Date(),
				pwDigest: "124567poiuyt",
			},
			{
				name: "BreakBot",
				createdAt: new Date(),
				updatedAt: new Date(),
				pwDigest: "qwerty123456",
			},
			{
				name: "BreadIsDead",
				createdAt: new Date(),
				updatedAt: new Date(),
				pwDigest: "123456qwertyzz",
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", { id: { [Sequelize.Op.gt]: 0 } });
	},
};
