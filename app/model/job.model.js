module.exports = (sequelize, Sequelize) => {
	const job = sequelize.define('job', {
        userId: {
		type: Sequelize.INTEGER
        },
        driverId: {
			type: Sequelize.INTEGER
        },
        start_locationId: {
            type: Sequelize.INTEGER
        },
        finish_locationId: {
            type: Sequelize.INTEGER
        },
        fee: {
			type: Sequelize.FLOAT
        },
        is_delete: {
			type: Sequelize.STRING
        },
	});

	return job;
}