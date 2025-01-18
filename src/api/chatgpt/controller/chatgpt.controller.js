import { combinePrompt } from "../../../util/prompt/combine.prompt.js";
import { createCasePrompt } from "../../../util/prompt/makeCase.prompt.js";
import { createReQuestionPrompt } from "../../../util/prompt/makeReQuestion.prompt.js";
import { ChatGPTAPI } from "../service/chatgpt.service.js";

const chatGPTService = new ChatGPTAPI();

export async function MakeCase(req, res) {
    try {
        const CHATGPTTOKEN = 100;
        const prompt = createCasePrompt(req.body.data);
        const result = await chatGPTService.GetChatGPTData(prompt, CHATGPTTOKEN);
        return res.json({ status: "SUCCESS", result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: "ERROR", error: "서버 에러, 관리자에게 문의 바랍니다." });
    }
}

export async function MakeReQuestionData(req, res) {
    try {
        const CHATGPTTOKEN = 1000;
        const prompt = createReQuestionPrompt(req.body.question,req.body.data);

        const result = await chatGPTService.GetChatGPTData(prompt, CHATGPTTOKEN);

        return res.json({ status: "SUCCESS", result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: "ERROR", error: "서버 에러, 관리자에게 문의 바랍니다." });
    }
}

export async function Combine(req, res) {
    try {
        const {question1, question2, data1, data2} = req.body;
        const CHATGPTTOKEN = 2000;
        const prompt = combinePrompt(question1, question2, data1, data2);

        const result = await chatGPTService.GetChatGPTData(prompt, CHATGPTTOKEN);

        return res.json({ status: "SUCCESS", result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: "ERROR", error: "서버 에러, 관리자에게 문의 바랍니다." });
    }
}