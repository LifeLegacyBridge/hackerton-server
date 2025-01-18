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
                    allowNull: false,
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
                underscored: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        this.belongsTo(db.BigQuestion, { foreignKey: 'bigQuestionId', targetKey: 'id' });
        this.belongsTo(db.SmallQuestion, { foreignKey: 'smallQuestionId', targetKey: 'id' });
    }
}

export default UserAnswer;
