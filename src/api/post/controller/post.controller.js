import * as postService from '../service/post.service.js';

export const SaveUserPost = async(req, res) => {
    try {
        const userPost = await postService.confirmPost(req.body);

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