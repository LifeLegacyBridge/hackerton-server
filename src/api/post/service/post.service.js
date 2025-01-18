import UserAnswer from "../../../database/model/userAnswer.model.js";

export const savePost = async(data) => {
    // console.log(data);
    const createUserAnswer = await UserAnswer.create({
        bigQuestionId: data.bigQuestionId,
        smallQuestionId: data.smallQuestionId,
        finalAnswer: data.finalAnswer
    });

    if (!createUserAnswer) {
        throw new Error("해당 유저 post를 저장하는데 실패했습니다.");
    }

    return createUserAnswer;
};

export const confirmPost = async(bigQuestionId, smallQuestionId) => {
    const userAnswer = await UserAnswer.findOne({
        where: {
            bigQuestionId: bigQuestionId,
            SmallQuestionId: smallQuestionId
        }
    });

    if (!userAnswer) {
        throw new Error("해당 유저의 post를 불러오는 거에 실패했습니다.");
    }

    return userAnswer;
}

export const updatePost = async(bigQuestionId, smallQuestionId, finalAnswer) => {
    const updateUserAnswer = await UserAnswer.update(
        { finalAnswer: finalAnswer },
        {
            where: {
                bigQuestionId: bigQuestionId,
                SmallQuestionId: smallQuestionId
            }
        }
    );

    if (!updateUserAnswer) {
        throw new Error("해당 유저 post를 수정하는데 실패했습니다.");
    }

    return finalAnswer;
};