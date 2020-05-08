module.exports = (sequelize, Sequelize) => {
	const chat = sequelize.define('chat', {
		name: {
			type: Sequelize.STRING
        },
        symbol: {
			type: Sequelize.STRING
        },     
		explanation: {
			type: Sequelize.STRING
		},	
        is_active: {
			type: Sequelize.STRING
        },
        is_delete: {
			type: Sequelize.STRING
        },
	});

	return chat;
}