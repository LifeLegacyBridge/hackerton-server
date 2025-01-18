import { DataTypes } from 'sequelize';

export default (sequelize) => {
    return sequelize.define('SmallQuestion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        bigQuestionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'BigQuestions',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
