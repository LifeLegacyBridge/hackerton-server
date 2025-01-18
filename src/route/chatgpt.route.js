import express from 'express';
import { MakeCase, MakeReQuestionData, Combine } from '../api/chatgpt/controller/chatgpt.controller.js';

export const chatgptRouter = express.Router();

chatgptRouter.post('/case',MakeCase);
chatgptRouter.post('/question',MakeReQuestionData);
chatgptRouter.post('/combine',Combine);