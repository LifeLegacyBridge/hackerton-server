import User from "../../../database/model/user.model.js";


export const confirmCase =  async(uuid) => {
    const user = await User.findOne({ where: { uuid: uuid } });

    if (!user.caseId) {
        throw new Error("해당 케이스를 불러올 수 없습니다.");
    }

    return user.caseId;
};