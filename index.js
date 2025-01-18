import express from 'express';
import db from './src/database/index.js';
import { authRouter } from './src/route/auth.route.js';
import { chatgptRouter } from './src/route/chatgpt.route.js';

const app = express();
const PORT = 3000;

// Express 기본 설정
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
app.use('/chatgpt',chatgptRouter);

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
