module.exports = (sequelize, Sequelize) => {
	const Note = sequelize.define('notes', {
		title: {
			type: Sequelize.STRING,
			required: true
		},
		detail: {
			type: Sequelize.STRING
		},
		// created_at: {
		// 	type: Sequelize.DATE(3),
		// 	defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
		// }
	});

	return Note;
}