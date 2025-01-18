import { 
    sequelize, 
    User,
    UserCase, 
    BigQuestion, 
    SmallQuestion, 
    UserAnswer } from '../../../database/index.js';

export const confirmCase =  async(caseId) => {
    const user = await User.findOne({ where: { caseId: caseId } });

    if (!user) {
        //
    }

    return user;
};