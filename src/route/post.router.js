import express from 'express';
import { 
    SaveUserPost,
    ConfirmUserPost,
    UpdateUserPost } from '../api/post/controller/post.controller.js';

export const postRouter = express.Router();

postRouter.post("/", SaveUserPost);
postRouter.get("/confirm/:bigQuestionId/:smallQuestionId", ConfirmUserPost);
postRouter.patch("/confirm", UpdateUserPost);