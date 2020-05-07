module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define('user', {
        name: {
			type: Sequelize.STRING
        },
        surname: {
			type: Sequelize.STRING
        },
        email: {
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
        guardian: {
			type: Sequelize.STRING
        },
        guardian_phone: {
			type: Sequelize.STRING
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

	return user;
}