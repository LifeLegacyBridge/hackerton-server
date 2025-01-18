import { DataTypes, Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                uuid: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
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
                caseId: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
            },
            {
                sequelize,
                modelName: 'User',
                tableName: 'users',
                timestamps: true,
                underscored: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db) {
        this.belongsTo(db.UserCase, { foreignKey: 'caseId', targetKey: 'id' });
    }
}

export default User;
