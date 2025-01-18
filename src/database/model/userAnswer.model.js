import { DataTypes } from 'sequelize';

export default (sequelize) => {
    return sequelize.define('UserAnswer', {
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
        smallQuestionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'SmallQuestions',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        photoUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        finalAnswer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
