import { MyProfileService } from '../service/myprofile.service.js';

const myProfileService = new MyProfileService();

export async function SaveMainQuestion(req, res) {
    try{
        const { caseNum } = req.body;
        await myProfileService.SaveMainQuestion(res.locals.uuid,caseNum);

        return res.json({ status: "SUCCESS" });
    } catch(err){
        console.log("myprofile/SaveMainQuestion error:",err);
        return res.status(500).json({ status: "ERROR", error: "서버 에러, 관리자에게 문의 바랍니다." });
    }
}   