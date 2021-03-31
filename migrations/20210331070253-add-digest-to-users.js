"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn("Users", "pwDigest", {
			type: Sequelize.STRING,
			allowNull: false,
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn("Users", "pwDigest");
	},
};
