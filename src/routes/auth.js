import express from 'express';
import AuthController from './../controllers/AuthController';
import Auth from '../middlewares/Auth';

const userRouter = express.Router();

const prfx = 'auth';

userRouter.post(`/${prfx}/signup`, AuthController.signup);
userRouter.post(`/${prfx}/signin`, AuthController.signin);
userRouter.get(`/${prfx}/me`, Auth, AuthController.me);
userRouter.get(`/${prfx}/verification`, AuthController.verifyUser);
// userRouter.post(`/${prfx}/logout`, Auth, AuthController.logout);
userRouter.patch(`/${prfx}/updateprofile`, Auth, AuthController.updateUser);
userRouter.post(`/${prfx}/refresh-email-token`, AuthController.getNewEmailToken);

export default userRouter;
