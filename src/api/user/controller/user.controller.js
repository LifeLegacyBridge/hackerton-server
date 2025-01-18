import * as userService from '../service/user.service.js';

export const GetUserCase = async(req, res) => {

    try {
        // const userCase = await userService.confirmCase(res.locals.uuid);
        const userCase = await userService.confirmCase('e80864d5-7c7e-426e-a68f-20a25dc9a11e');

        if (!userCase) {
            return res.status(404).json({
                message: "사용자 case 불러오기 실패"
            });
        }

        return res.status(200).json({
            message: "사용자 case 불러오기 성공",
            data: userCase
          });
    } catch (err) {
        console.error(err);
    }
};

