import express from 'express';
import { SaveUserPost } from '../api/post/controller/post.controller.js';

export const postRouter = express.Router();

postRouter.post("/", SaveUserPost);