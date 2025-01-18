import { DataTypes, Model } from 'sequelize';

class BigQuestion extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                content: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'BigQuestion',
                tableName: 'big_questions',
                timestamps: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
}

export default BigQuestion;
