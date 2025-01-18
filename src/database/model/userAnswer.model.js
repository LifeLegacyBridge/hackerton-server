import { DataTypes, Model } from 'sequelize';

class UserAnswer extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                uuid: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                },
                bigQuestionId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                smallQuestionId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                photoUrl: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                finalAnswer: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'UserAnswer',
                tableName: 'user_answers',
                timestamps: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
}

export default UserAnswer;
