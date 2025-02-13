import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // cors 패키지 임포트
dotenv.config();

import db from './src/database/index.js';
import { authRouter } from './src/route/auth.route.js';
import { userRouter } from './src/route/user.router.js';
import { myprofileRouter } from './src/route/myprofile.route.js';
import { postRouter } from './src/route/post.router.js';
import { chatgptRouter } from './src/route/chatgpt.route.js';

const app = express();
const PORT = 3000;

// Express 기본 설정
app.use(cors()); // '*' 기본 허용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


(async () => {
    try {
        await db.sequelize.sync({ alter: true });
        console.log('Database synchronized successfully!');
    } catch (err) {
        console.error('Error synchronizing database:', err);
    }
})();

// 간단한 API 예시
app.get('/', (req, res) => {
    res.send('Sequelize와 Express 서버가 동작 중입니다!');
});

app.use('/auth',authRouter);
app.use('/user',userRouter);
app.use('/chatgpt',chatgptRouter);
app.use('/myprofile',myprofileRouter);
app.use('/post', postRouter);

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
