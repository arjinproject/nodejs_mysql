module.exports = (sequelize, Sequelize) => {
    const user_roles = sequelize.define('user_roles', {
        driverId: {
        type: Sequelize.STRING
        },
        userId: {
            type: Sequelize.INTEGER
        },
        adminId: {
            type: Sequelize.INTEGER
        },
        roleId: {
            type: Sequelize.INTEGER
        },
        });
    
        return user_roles;
    }