import { AuthService } from "../service/auth.service.js";

const authService = new AuthService();

export async function signup (req,res) {
    try{
        const { email, password } = req.body;
        const result = await authService.createUser(email,password);
        return res.json({status: "SUCCESS", result});
    }catch(err){
        console.error(err);
    }
}

export async function signin (req,res) {
    try{
        const { email, password } = req.body;
        const result = await authService.login(email,password);
        return res.json({status: "SUCCESS", result});
    }catch(err){
        console.error(err);
    }
}