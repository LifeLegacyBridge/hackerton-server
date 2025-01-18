import { DataTypes, Model } from 'sequelize';

class UserCase extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                caseName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'UserCase',
                tableName: 'user_cases',
                timestamps: true,
                underscored: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        this.hasMany(db.User, { foreignKey: 'caseId', sourceKey: 'id' });
    }
}

export default UserCase;
