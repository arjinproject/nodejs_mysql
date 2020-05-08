module.exports = (sequelize, Sequelize) => {
    const driver_location = sequelize.define('driver_location', {
            driverId: {
            type: Sequelize.INTEGER
            },
            locationId: {
                type: Sequelize.INTEGER
            },
        });
    
        return driver_location;
    }