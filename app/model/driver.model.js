module.exports = (sequelize, Sequelize) => {
	const driver = sequelize.define('driver', {
		name: {
			type: Sequelize.STRING
        },
        surname: {
			type: Sequelize.STRING
        },
        mail: {
			type: Sequelize.STRING
        },
        password: {
			type: Sequelize.STRING
        },
        birthday: {
			type: Sequelize.STRING
        },
        phone: {
			type: Sequelize.STRING
        },
        gender: {
			type: Sequelize.STRING
        },
        start_date: {
            type: Sequelize.STRING
        },
        finish_date: {
            type: Sequelize.STRING
        },
        device: {
            type: Sequelize.STRING
        },
        institutionId: {
			type: Sequelize.INTEGER
        },
        created_by_driverId: {
			type: Sequelize.INTEGER
        },
        is_active: {
			type: Sequelize.STRING
        },
        is_delete: {
			type: Sequelize.STRING
        },
	});

	return driver;
}