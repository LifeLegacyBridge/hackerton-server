import { MyprofileRepository } from "../repository/myprofile.repositroy.js";


export class MyProfileService {
    constructor () {
        this.myProfileRepository = new MyprofileRepository();
    }
    
    async SaveMainQuestion(uid,caseNum) {
        try {
            // UserCase 데이터 받아오기 
            const caseData = await this.myProfileRepository.findCaseIDByCaseName(caseNum);
            await this.myProfileRepository.SaveMainQuestion(uid, caseData.id);
        } catch (error) {
            console.error('Error in SaveMainQuestion:', error);
            throw new Error(error.message || 'MYPROFILE_SAVE_MAIN_QUESTION_ERR');
        }
    }
}
