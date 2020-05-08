module.exports = (sequelize, Sequelize) => {
const car_driver = sequelize.define('car_driver', {
        car_id: {
		type: Sequelize.INTEGER
        },
        driverId: {
			type: Sequelize.INTEGER
        },
        is_active: {
			type: Sequelize.STRING
        },
        is_delete: {
			type: Sequelize.STRING
        },
	});

	return car_driver;
}