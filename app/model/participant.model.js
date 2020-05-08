module.exports = (sequelize, Sequelize) => {
	const participant = sequelize.define('participant', {
		chatId: {
			type: Sequelize.INTEGER
        },
        driverId: {
			type: Sequelize.INTEGER
		},
		adminId: {
			type: Sequelize.INTEGER
		},
        is_delete: {
			type: Sequelize.STRING
        }
	});

	return participant;
}