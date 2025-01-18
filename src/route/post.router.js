import express from 'express';
import { 
    SaveUserPost,
    ConfirmUserPost,
    UpdateUserPost, 
    final} from '../api/post/controller/post.controller.js';
import { loginCheckMiddleWares } from '../middlewares/logincheck.middlewares.js';

export const postRouter = express.Router();

postRouter.post("/", loginCheckMiddleWares,SaveUserPost);
postRouter.get("/confirm/:bigQuestionId/:smallQuestionId", loginCheckMiddleWares,ConfirmUserPost);
postRouter.patch("/confirm", loginCheckMiddleWares,UpdateUserPost);
postRouter.post('/final',loginCheckMiddleWares,final);