import { DataTypes } from 'sequelize';

export default (sequelize) => {
    return sequelize.define('BigQuestion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
