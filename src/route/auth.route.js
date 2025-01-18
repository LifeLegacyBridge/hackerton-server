import express from 'express';
import { signup } from '../api/auth/controller/auth.controller.js';

export const authRouter = express.Router();

authRouter.post('/signup',signup);