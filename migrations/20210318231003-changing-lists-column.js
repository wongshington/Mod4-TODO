"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Lists", "titles");
		return queryInterface.addColumn("Lists", "title", {
			type: Sequelize.STRING,
			allowNull: false,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Lists", "title");
		return queryInterface.addColumn("Lists", "titles", {
			type: Sequelize.STRING,
			allowNull: false,
		});
	},
};
