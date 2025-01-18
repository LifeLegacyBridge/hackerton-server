import { DataTypes, Model } from 'sequelize';

class SmallQuestion extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                smallQuestionId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                bigQuestionId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                content: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'SmallQuestion',
                tableName: 'small_questions',
                timestamps: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
}

export default SmallQuestion;
