module.exports = (sequelize, Sequelize) => {
	const car = sequelize.define('car', {
        brand: {
                type: Sequelize.STRING
        },
        model: {
			type: Sequelize.STRING
        },
        color: {
			type: Sequelize.STRING
        },
        model_date: {
			type: Sequelize.STRING
        },
        owner: {
			type: Sequelize.STRING
        },
        is_active: {
			type: Sequelize.STRING
        },
        is_delete: {
			type: Sequelize.STRING
        },
	});

	return car;
}