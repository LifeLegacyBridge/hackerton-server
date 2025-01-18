import { AuthRepository } from "../repository/auth.repository.js"
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

        return user;
    }
}