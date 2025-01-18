import express from 'express';
import { sequelize } from './src/database/index.js';

const app = express();
const PORT = 3000;

// Express 기본 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sequelize 테이블 초기화
const initDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('데이터베이스와 모든 테이블이 성공적으로 동기화되었습니다!');
    } catch (error) {
        console.error('데이터베이스 초기화 중 오류 발생:', error);
    }
};

initDatabase();

// 간단한 API 예시
app.get('/', (req, res) => {
    res.send('Sequelize와 Express 서버가 동작 중입니다!');
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
