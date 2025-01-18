import { DataTypes } from 'sequelize';

export default (sequelize) => {
    return sequelize.define('UserCase', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        caseName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
