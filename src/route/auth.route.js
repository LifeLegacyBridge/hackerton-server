import express from 'express';
import { signin, signup, test } from '../api/auth/controller/auth.controller.js';
import { loginCheckMiddleWares } from '../middlewares/logincheck.middlewares.js';

export const authRouter = express.Router();

authRouter.post('/signup',signup);
authRouter.post('/signin',signin);