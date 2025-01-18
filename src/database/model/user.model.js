import { DataTypes } from 'sequelize';

export default (sequelize) => {
    return sequelize.define('User', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        caseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'UserCases',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
