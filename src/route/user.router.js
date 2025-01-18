import express from 'express';
import { GetUserCase } from '../api/user/controller/user.controller.js';

export const userRouter = express.Router();
 
userRouter.get("/cases",GetUserCase); // 사용자 case 가져오기