import { User } from '../../../database/index.js';
import * as userService from '../service/user.service.js';

export const GetUserCase = async(req, res, next) => {

    try {
        // const { uuid } = req.user;
        const userCase = await userService.confirmCase(res.locals.uid);

        return res.status(200).success({
            message: "사용자 case 불러오기 성공"
          });
    } catch (err) {
        //
        next(err);
    }
};