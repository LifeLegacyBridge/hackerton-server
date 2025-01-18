import { AuthService } from "../service/auth.service.js";

const authService = new AuthService();

export async function signup (req,res) {
    const { email, password } = req.body;
    const result = await authService.createUser(email,password);
    return res.json(result);
}

export async function sigin (req,res) {

}


