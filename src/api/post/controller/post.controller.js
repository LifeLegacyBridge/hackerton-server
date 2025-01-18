import * as postService from '../service/post.service.js';

export const SaveUserPost = async(req, res) => {
    try {
        const userPost = await postService.savePost(req.body,res.locals.uuid);

        if (!userPost) {
            return res.status(404).json({
                message: "사용자 post 저장 실패"
            });
        }

        return res.status(201).json({
            message: "사용자 post 저장 성공",
            data: userPost
        });
    } catch (err) {
        console.log(err);
    }
}

export const ConfirmUserPost = async(req, res) => {
    try {
        const { bigQuestionId, smallQuestionId } = req.params;
        const userPost = await postService.confirmPost(bigQuestionId, smallQuestionId,res.locals.uuid);

        if (!userPost) {
            return res.status(404).json({
                message: "사용자 post 불러오기 실패"
            });
        }

        return res.status(200).json({
            message: "사용자 post 불러오기 성공",
            data: userPost
          });

    } catch (err) {
        console.log(err);
    }
};

export const UpdateUserPost = async(req, res) => {
    try {
        const { bigQuestionId, smallQuestionId, finalAnswer } = req.body;
        const userPost = await postService.updatePost(bigQuestionId, smallQuestionId, finalAnswer,res.locals.uuid);

        if (!userPost) {
            return res.status(404).json({
                message: "사용자 post 수정 실패"
            });
        }

        return res.status(200).json({
            message: "사용자 post 수정 성공",
            data: userPost
        });
    } catch (err) {
        console.log(err);
    }
}

export async function final(req,res) {
    try{
        await postService.final(res.locals.uuid);
        return res.json({Success:"true"});
    }catch(err){
        console.log(err);
    }
}