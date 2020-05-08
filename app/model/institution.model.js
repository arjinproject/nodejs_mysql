module.exports = (sequelize, Sequelize) => {
	const institution = sequelize.define('institution', {
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
        phone: {
			type: Sequelize.STRING
        },
        adress: {
			type: Sequelize.STRING
        },
        country: {
			type: Sequelize.STRING
        },
        city: {
			type: Sequelize.STRING
        },
        town: {
			type: Sequelize.STRING
        },
        post_code: {
            type: Sequelize.STRING
        },
        quota: {
            type: Sequelize.STRING
        },
        is_active: {
			type: Sequelize.STRING
        },
        is_delete: {
			type: Sequelize.STRING
        },
        created_by_adminId: {
			type: Sequelize.INTEGER
        },
	});

	return institution;
}