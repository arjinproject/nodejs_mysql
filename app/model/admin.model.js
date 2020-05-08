module.exports = (sequelize, Sequelize) => {
	const admin = sequelize.define('admin', {
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
        is_active: {
			type: Sequelize.STRING
        },
        is_delete: {
			type: Sequelize.STRING
        },   
	});

	return admin;
}