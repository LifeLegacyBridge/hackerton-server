import axios from "axios";
import UserAnswer from "../../../database/model/userAnswer.model.js";
import User from "../../../database/model/user.model.js";

export const savePost = async(data,uuid) => {
    // console.log(data);
    const createUserAnswer = await UserAnswer.create({
        bigQuestionId: data.bigQuestionId,
        smallQuestionId: data.smallQuestionId,
        finalAnswer: data.finalAnswer,
        uuid,
    });

    if (!createUserAnswer) {
        throw new Error("해당 유저 post를 저장하는데 실패했습니다.");
    }

    return createUserAnswer;
};

export const confirmPost = async(bigQuestionId, smallQuestionId, uuid) => {
    const userAnswer = await UserAnswer.findOne({
        where: {
            bigQuestionId: bigQuestionId,
            SmallQuestionId: smallQuestionId,
            uuid,
        }
    });

    if (!userAnswer) {
        throw new Error("해당 유저의 post를 불러오는 거에 실패했습니다.");
    }

    return userAnswer;
}

export const updatePost = async(bigQuestionId, smallQuestionId, finalAnswer, uuid) => {
    const updateUserAnswer = await UserAnswer.update(
        { finalAnswer: finalAnswer },
        {
            where: {
                bigQuestionId: bigQuestionId,
                SmallQuestionId: smallQuestionId,
                uuid,
            }
        }
    );

    if (!updateUserAnswer) {
        throw new Error("해당 유저 post를 수정하는데 실패했습니다.");
    }

    return finalAnswer;
};

export const final = async (uuid) => {
    for(let i=1; i<=1; i++){
        for(let j=1; j<=5; j++){
            const userAnswer = await UserAnswer.findOne({
                where: {
                    bigQuestionId: i,
                    smallQuestionId: j,
                }
            });
            if(!userAnswer){
                break;
            }
            else{
                try{
                    const response = await axios.post(
                        'http://192.168.187.68:5000/generate',
                        {
                            prompt: userAnswer.finalAnswer,
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                    await UserAnswer.update({
                        photoUrl:response.data.s3_url,
                    },
                    {
                        where:{uuid},
                    });
                }catch(err){
                    console.error(err);
                }
            }
        }
    }
    return;
}