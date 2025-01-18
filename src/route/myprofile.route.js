import express from 'express';
import { SaveMainQuestion, GetMainQuestion } from '../api/myprofile/controller/myprofile.controller.js';
import { loginCheckMiddleWares } from '../middlewares/logincheck.middlewares.js';

export const myprofileRouter = express.Router();

myprofileRouter.post('/save',loginCheckMiddleWares,SaveMainQuestion);
myprofileRouter.post('/getque',GetMainQuestion);
