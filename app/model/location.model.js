module.exports = (sequelize, Sequelize) => {
	const location = sequelize.define('location', {
		langituded: {
			type: Sequelize.DOUBLE
        },
        lotituded: {
			type: Sequelize.DOUBLE
        },
	});

	return location;
}