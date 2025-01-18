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
                underscored: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        this.belongsTo(db.BigQuestion, { foreignKey: 'bigQuestionId', targetKey: 'id' });
    }
}

export default SmallQuestion;
