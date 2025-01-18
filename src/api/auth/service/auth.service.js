import { AuthRepository } from "../repository/auth.repository.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthService {
    constructor(){
        this.authRepository =  new AuthRepository();
    }

    async createUser(email,password){

        const existUser = await this.authRepository.findUserByEmail(email);
        if (existUser) {
            throw new Error('중복된 사용자');
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = this.authRepository.createUser(email,hashPassword);

        const token = jwt.sign( { 
            uuid:user.uuid
        }, process.env.JWT_SECRET, { 
            expiresIn: '1h' 
        });

        return token;
    }

    async login(email,password){
        const user = await this.authRepository.findUserByEmail(email);
        if (!user) {
            throw new Error('없는 사용자');
        }
        
        const isMatchPassword = await bcrypt.compare(password,user.password);
        if(!isMatchPassword){
            throw new Error('틀린 비밀번호');
        }

        const token = jwt.sign( { 
            uuid:user.uuid
        }, process.env.JWT_SECRET, { 
            expiresIn: '1h' 
        });

        return token
    }
}