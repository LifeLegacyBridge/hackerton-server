import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './model/user.model.js';
import UserCaseModel from './model/userCase.model.js';
import BigQuestionModel from './model/bigQuestion.model.js';
import SmallQuestionModel from './model/smallQuestion.model.js';
import UserAnswerModel from './model/userAnswer.model.js';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: '3306',
    }
);

const User = UserModel(sequelize);
const UserCase = UserCaseModel(sequelize);
const BigQuestion = BigQuestionModel(sequelize);
const SmallQuestion = SmallQuestionModel(sequelize);
const UserAnswer = UserAnswerModel(sequelize);

// 관계 설정
User.belongsTo(UserCase, { foreignKey: 'caseId' });

SmallQuestion.belongsTo(BigQuestion, {
    foreignKey: 'bigQuestionId',
    as: 'BigQuestion',
});

UserAnswer.belongsTo(BigQuestion, {
    foreignKey: 'bigQuestionId',
    as: 'BigQuestion',
});

UserAnswer.belongsTo(SmallQuestion, {
    foreignKey: 'smallQuestionId',
    as: 'SmallQuestion',
});

export { sequelize, User, UserCase, BigQuestion, SmallQuestion, UserAnswer };
