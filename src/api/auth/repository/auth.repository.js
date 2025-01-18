import User from "../../../database/model/user.model.js";

 export class AuthRepository {
    async findUserByEmail(email){
        try{
            return await User.findOne({where:{email}});
        }catch(err){
            console.error(err);
        }
    }
    async createUser(email, password){
        try{    
            const user = await User.create({
                email,
                password,
            });
            return user;
        }catch(err){
            console.error(err);
        }
    }
}