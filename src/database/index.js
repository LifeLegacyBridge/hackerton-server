import Sequelize from 'sequelize';
import dotenv from 'dotenv';

import UserModel from './model/user.model.js';
import UserCaseModel from './model/userCase.model.js';
import BigQuestionModel from './model/bigQuestion.model.js';
import SmallQuestionModel from './model/smallQuestion.model.js';
import UserAnswerModel from './model/userAnswer.model.js';

dotenv.config();

const db = {};

// Sequelize 인스턴스 생성
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306,
        logging: false,
    }
);

// Sequelize와 모델 연결
db.sequelize = sequelize;

db.User = UserModel;
db.UserCase = UserCaseModel;
db.BigQuestion = BigQuestionModel;
db.SmallQuestion = SmallQuestionModel;
db.UserAnswer = UserAnswerModel;

// 모델 초기화
UserModel.init(sequelize);
UserCaseModel.init(sequelize);
BigQuestionModel.init(sequelize);
SmallQuestionModel.init(sequelize);
UserAnswerModel.init(sequelize);

// 관계 설정
UserModel.associate(db);
UserCaseModel.associate(db);
BigQuestionModel.associate(db);
SmallQuestionModel.associate(db);
UserAnswerModel.associate(db);

// 내보내기
export default db;
