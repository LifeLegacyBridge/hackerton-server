import UserAnswer from "../../../database/model/userAnswer.model.js";

export const confirmPost = async(data) => {
    const createUserAnswer = await UserAnswer.create({
        bigQuestionId: data.bigQuestionId,
        SmallQuestionId: data.SmallQuestionId,
        finalAnswer: data.data
    });

    if (!createUserAnswer) {
        throw new Error("해당 유저 post를 저장하는데 실패했습니다.");
    }

    return createUserAnswer;
};