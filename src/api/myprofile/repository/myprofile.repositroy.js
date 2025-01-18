import User from "../../../database/model/user.model.js";
import UserCase from "../../../database/model/userCase.model.js";

 export class MyprofileRepository {
    async SaveMainQuestion(uuid, caseId){
        try{
            await User.update({
                caseId,
            },{
                where:{
                    uuid
                }
            })
        }catch(err){
            console.error(err);
        }
    }
    
    async findCaseIDByCaseName (caseName) {
        try{
            return await UserCase.findOne({where:{caseName}})
        }catch(err){
            console.error(err);
        }
    }
}