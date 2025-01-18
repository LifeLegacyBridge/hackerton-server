import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const loginCheckMiddleWares = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    // Bearer 토큰에서 실제 토큰 부분만 추출
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token missing in Authorization header' });
    }

    try {
        // 토큰 검증
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        // res.locals에 uuid 저장
        res.locals.uuid = payload.uuid;

        next(); // 다음 미들웨어 또는 라우터로 이동
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

